function solveTask6(params) {
  let obj = isValidParams6(params);

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
    if (pattern.test(arr[0]) && pattern.test(arr[1])) {
      obj.length = arr[0];
      obj.max = arr[1];
    } else {
      obj.status = 'неудача';
      obj.reason = 'неверные входные параметры';
    }
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
  console.log(arr)
  return arr.join(', ');

}