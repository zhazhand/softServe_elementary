function solveTask7(params) {
  let obj = getParams7(params);

  if (obj.status === 'успех') {
    return JSON.stringify(fibo(obj));
  }
  return JSON.stringify(obj);
}


//check input parameters
function isValidParams7(arr) {
  const pattern = /^\d+$/;
  let obj = arr.length > 1 ? isValidParamsLength(arr, 2) : isValidParamsLength(arr, 1);

  if (obj.status === 'успех') {
    if (!pattern.test(arr[0]) || !pattern.test(arr[1])) {
      obj.status = 'неудача';
      obj.reason = 'неверные входные параметры';
    }else if(parseInt(arr[0]) >= parseInt(arr[1])){
      obj.status = 'неудача';
      obj.reason = 'поле максимум должно быть больше чем поле минимум';
    }
  }
  return obj;
}

//get input parameters
function getParams7(arr) {
  let obj = isValidParams7(arr);

  if (obj.status === 'успех') {
    if (arr.length > 1) {
      obj.min = arr[0];
      obj.max = arr[1];
    } else {
      obj.length = arr[0];
    }
  }
  return obj;
}

//length 
function fiboLength(n) {
  let obj = isTooMuchLength(n, 20);
  let arr = [];

  if (obj.status === 'неудача') {
    return obj;
  }

  for (let i = 0;; i++) {
    arr[i] = i > 1 ? arr[i - 1] + arr[i - 2] : 1;
    if (arr[i].toString().length > n) {
      break
    }

  }

  return arr.filter((item) => item.toString().length == n);
}

//min, max
function fiboRange(min, max) {
  let arr = [];

  for (let i = 0;; i++) {
    arr[i] = i > 1 ? arr[i - 1] + arr[i - 2] : 1;
    if (arr[i] > max) {
      break
    }

  }

  return arr.filter((item) => (item >= min && item <= max));
}

//main function
function fibo(par) {

  return par.length ? fiboLength(par['length']) : fiboRange(par['min'], par['max']);
}