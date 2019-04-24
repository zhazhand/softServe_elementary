function solveTask6(params) {

  if (isValid6(params)) {
    return JSON.stringify(isValid6(params));
  }

  return getNumSequence(params);
}

//validate
function isValid6(params) {
  let obj = {
    status: 'неудача'
  };
  const pattern = /^\d+$/;

  if (isEmptyField(params, '')) {
    obj.reason = failMessage[0];
    return obj;
  }
  if (isEmptyField(params, 0)) {
    obj.reason = failMessage[1];
    return obj;
  }
  if (isMatchPattern(params, pattern)) {
    obj.reason = failMessage[2];
    return obj;
  }
  if (isTooMuchLength(params[0], 40)) {
    obj.reason = `${failMessage[3]} (>40)`;
    return obj;
  }
  return false;
}

//main function
function getNumSequence(par) {

  let arr = [];
  let i = 1;

  while (arr.length != par[0]) {
    let tmp = i * i;
    if (tmp >= par[1]) {
      arr.push(i);
    }
    i++;
  }

  return arr.join(', ');

}