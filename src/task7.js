function solveTask7(params) {

  if (isValid7(params)) {
    return JSON.stringify(isValid7(params));
  }

  let result = hasContextLength(params) ? fiboLength(params[0]) : fiboRange(params[0], params[1]);

  return JSON.stringify(result);
}

//definition input parameters (min and max or length)
function hasContextLength(arr) {
  const empty = '';
  if (arr[1] === empty && arr[0] !== empty) {
    return true;
  }
  return false;
}

//check way with length
function isValidWayLength(par) {
  const pattern = /^\d+$/;
  let codeMessage;

  if (parseInt(par) === 0) {
    codeMessage = 1;
  } else if (!pattern.test(par)) {
    codeMessage = 2;
  } else if (isTooMuchLength(par, 20)) {
    codeMessage = 3;
  } else {
    codeMessage = 200;
  }
  return codeMessage;
}

//check way with range (min and max)
function isValidWayRange(arr) {
  const pattern = /^\d+$/;
  let codeMessage;

  if (isEmptyField(arr, '')) {
    return codeMessage = 0;
  }
  if (isEmptyField(arr, 0)) {
    return codeMessage = 1;
  }
  if (isMatchPattern(arr, pattern)) {
    return codeMessage = 2;
  }
  if (parseInt(arr[0]) > parseInt(arr[1])) {
    return codeMessage = 4;
  }
  return codeMessage = 200;
}

//length 
function fiboLength(n) {
  let arr = [];
  let result = [];
  let tmp = n;

  for (let i = 0; tmp <= n; i++) {
    arr[i] = i > 1 ? arr[i - 1] + arr[i - 2] : 1;
    tmp = arr[i].toString().length;
    if (tmp === parseInt(n)) {
      result.push(parseInt(arr[i]));
    }
  }

  return result;
}

//min, max
function fiboRange(min, max) {
  let arr = [];
  let tmp = parseInt(min);

  for (let i = 0; tmp < max; i++) {
    arr[i] = i > 1 ? arr[i - 1] + arr[i - 2] : 1;
    tmp = arr[i];
  }
  return arr.filter((item) => (item >= min && item <= max));
}

//validate
function isValid7(params) {
  let obj = {
    status: 'неудача'
  };

  let codeMessage = hasContextLength(params) ? isValidWayLength(params[0]) : isValidWayRange(params);

  if (codeMessage !== 200) {
    obj.reason = failMessage[codeMessage];
    return obj;
  }
  return false;
}