function solveTask4(params) {
  let obj = isValidParams4(params);

  if (obj.status === 'успех') {
    return checkNumber(obj.element);
  }
  return JSON.stringify(obj);
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

function findMax(arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i]
    }
  }
  return maxElement
}

function isValidParams4(array) {
  const pattern = /^\d+$/;

  let obj = isValidParamsLength(array, 1);

  if (obj.status === 'успех') {

    if (pattern.test(array[0])) {
      obj.element = array[0];
    } else {
      obj.status = 'неудача';
      obj.reason = 'неверные входные параметры';
    }
  }
  return obj;
}