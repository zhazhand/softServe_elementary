function isEmptyField(arr, tmpl) {
  return arr.some(x => {
    if (typeof tmpl === 'number') {
      x = +x;
    }
    return x === tmpl
  });
}

function isTooMuchLength(elem, len) {
  return (elem > len) ? `слишком большая длина (>${len})` : false;
}

function isMatchPattern(arr, patrn) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (!patrn.test(arr[i])) {
      flag = true;
    }
  }
  return flag;
}
