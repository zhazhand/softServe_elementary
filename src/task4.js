function solveTask4(params) {

  if (isValid4(params)) {
    return JSON.stringify(isValid4(params));
  }
  return checkNumber(params);
}

//main function
function checkNumber(param) {
  let str = param.toString();
  let arr = [];

  for (let j = 0; j < str.length; j++) {
    let strEnd = str.length - j;

    for (let i = 0; i < strEnd; i++) {

      let newStr = str.slice(i, strEnd);
      let checkedStr = isPalindrome(newStr);

      if (checkedStr && checkedStr > 10) {
        arr.push(checkedStr);
        break;
      }
    }

  }
  arr = arr.map((item) => parseInt(item));
  return arr.length > 0 ? findMax(arr) : arr.length;
}

//checking (temporary) string on palindrome 
function isPalindrome(checkingStr) {
  let flag = true;
  for (let i = 0; i < checkingStr.length / 2; i++) {

    if (checkingStr[i] !== checkingStr[checkingStr.length - 1 - i]) {
      flag = false;
      break
    }

  }
  return flag ? checkingStr : flag;
}

//find max element
function findMax(arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i]
    }
  }
  return maxElement
}

//validate
function isValid4(params) {
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
  return false;
}