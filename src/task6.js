function solveTask6(params) {
  let obj = getParams6(params);

  if (obj.status === 'успех') {
    return getNumSequence(obj.length, obj.max);
  }
  return JSON.stringify(obj);
}

//check input parameters
function isValidParams6(arr) {
  const pattern = /^\d+$/;
  let obj = isValidParamsLength(arr, 2);

  if (obj.status === 'успех') {
    if (!pattern.test(arr[0]) || !pattern.test(arr[1])) {
      obj.status = 'неудача';
      obj.reason = 'неверные входные параметры';
    } else {
      obj = isTooMuchLength(arr[0], 40);
    }
  }
  return obj;
}

//get input parameters
function getParams6(arr) {
  let obj = isValidParams6(arr);

  if (obj.status === 'успех') {
    obj.length = arr[0];
    obj.max = arr[1];
  }
  return obj;
}

//main function
function getNumSequence(n, m) {

  let arr = [];
  let i = 1;

  while (arr.length != n) {
    let tmp = i * i;
    if (tmp >= m) {
      arr.push(i);
    }
    i++;
  }

  return arr.join(', ');

}