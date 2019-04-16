function isValidParamsLength(arr, expectedLength, flag = true) {
  let obj = {
    status: 'неудача',
    reason: 'количество параметров не совпадает с условием'
  };;

  if ((flag && arr.length === expectedLength) || (!flag && (arr.length % expectedLength) === 0)) {
    obj = {
      status: 'успех'
    };
  }
  return obj;
}

function isTooMuchLength(elem, len) {
  let obj = {
    status: 'успех'
  };

  if (elem > len) {
    obj = {
      status: 'неудача',
      reason: `слишком большая длина (>${len})`
    };

  }

  return obj;
}