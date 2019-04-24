function solveTask1(params) {
  clearFormBackground();

  if (isValid1(params)) {
    return JSON.stringify(isValid1(params));
  }
  return createChessBoard(params[0], params[1], params[2]);
}

//validate
function isValid1(params) {
  let arr = params.slice(0, params.length - 1);
  let obj = {
    status: 'неудача'
  };
  const pattern = /^\d+$/;

  if (isEmptyField(params, '')) {
    obj.reason = failMessage[0];
    return obj;
  }
  if (isEmptyField(arr, 0)) {
    obj.reason = failMessage[1];
    return obj;
  }
  if (isMatchPattern(arr, pattern)) {
    obj.reason = failMessage[2];
    return obj;
  }
  if (isTooMuchLength(arr[0], 100) || isTooMuchLength(arr[1], 100)) {
    obj.reason = `${failMessage[3]} (>100)`;
    return obj;
  }
}

//main function
function createChessBoard(heig, wid, symb) {
  let res = '';
  const space = ' ';
  for (let j = 0; j < heig; j++) {
    for (let i = 0; i < wid; i++) {
      if (j % 2) {
        res += i % 2 === 1 ? symb : space;
      } else {
        res += i % 2 === 1 ? space : symb;
      }
    }
    res += '\n';
  }
  return res
}