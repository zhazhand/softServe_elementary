function solveTask4(params) {
  let obj = isValidParams4(params);

  if (obj.status === 'удачный') {
    return checkNumber(obj.element);
  }
  return JSON.stringify(obj);
}

//main function
function checkNumber(param) {
  let str = param.toString();
  let arr = [];

  for (let j = 0; j < str.length; j++) {
    let tmpStr = str.slice(0, str.length - 1 - j); //temporary let
    if (tmpStr.indexOf(str[str.length - 1 - j]) == -1) {
      continue
    } else {
      let newStr = str.slice(str.indexOf(str[str.length - 1 - j]), str.length - j);
      let checkedStr = isPalindrome(newStr);
      if (checkedStr && checkedStr > 10) {
        arr.push(checkedStr);
      }
    }
  }
  arr = arr.map((item) => parseInt(item));
  return arr.length ? findMax(arr) : arr.length;
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
  return flag ? checkingStr : 0;
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
  let obj = {};
  const pattern = /^\d+$/;

  if (array.length === 1) {
    if (pattern.test(array[0])) {
      obj = {
        status: 'удачный',
        element: array[0]
      };
    } else {
      obj = {
        status: 'неудачный',
        reason: 'неверные входные параметры'
      };
    }
  } else {
    obj = {
      status: 'неудачный',
      reason: 'количество параметров не совпадает с условием'
    };
  }
  return obj;
}