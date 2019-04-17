function solveTask1(params) {
  let obj = getParams1(params);

  if (obj.status === 'успех') {
    return createChessBoard(obj.width, obj.height, obj.symbol);
  }
  return JSON.stringify(obj);
}

/* function chessBoard(wid, heig, symb = '*') {
  let res = '';
  const space = ' ';
  for (let j = 0; j < heig; j++) {
    for (let i = 0; i < wid; i++) {
      if (j % 2) {
        res += i % 2 ? symb : space;
      } else {
        res += i % 2 ? space : symb;
      }
    }
    res += '\n';
  }
  return res
} */
//
function createChessBoard(wid, heig, symb) {
  let res = '';
  let flag = true;

  const space = ' ';

  for (let i = 0; i < wid * heig; i++) {
    if (flag) {
      res += (i % 2 === 1) ? space : symb;
    } else {
      res += (i % 2 === 1) ? symb : space;
    }
    if ((i + 1) % wid === 0) {
      res += '\n';
      if (wid % 2 === 0) {
        flag = !flag;
      }
    }
  }
  return res
}

//check input parameters
function isValidParams1(arr) {
  const pattern = /^\d+$/;
  let obj = isValidParamsLength(arr, 3);

  if (obj.status === 'успех') {
    if (!parseInt(arr[0]) || !parseInt(arr[1]) || !pattern.test(arr[0]) || !pattern.test(arr[1]) || !(arr[2].length === 1)) {
      obj.status = 'неудача';
      obj.reason = 'неверные входные параметры';
    } else if (arr[0] > 100 || arr[1] > 100) {
      obj.status = 'неудача';
      obj.reason = 'слишком большой размер (>100)';
    }
  }
  return obj;
}

//get input parameters
function getParams1(arr) {
  let obj = isValidParams1(arr);

  if (obj.status === 'успех') {
    obj.width = arr[0];
    obj.height = arr[1];
    obj.symbol = arr[2];
  }

  return obj;
}