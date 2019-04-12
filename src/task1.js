function solveTask1(params) {
  let obj = isValidParams1(params);
  if (obj.status === 'passed') {
    return chessBoard(obj.width, obj.height, obj.symbol);
  } else {
    return JSON.stringify(obj);
  }
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
function chessBoard(wid, heig, symb) {
  let res = '',
    flag = true;
  const space = ' ';
  for (let i = 0; i < wid * heig; i++) {
    if (flag) {
      res += i % 2 ? space : symb;
    } else {
      res += i % 2 ? symb : space;
    }
    if (!((i + 1) % wid)) {
      res += '\n';
      if (!(wid % 2)) {
        flag = !flag;
      }
    }
  }
  return res
}

function isValidParams1(arr) {
  let obj = {};
  if (arr.length === 3) {
    if (deepValid1(arr)) {
      obj = {
        status: 'passed',
        width: arr[0],
        height: arr[1],
        symbol: arr[2]
      };
    } else {
      obj = {
        status: 'failed',
        reason: 'неверные входные параметры'
      };
    }
  } else {
    obj = {
      status: 'failed',
      reason: 'количество параметров не совпадает с условием'
    };
  }
  return obj;
}

function deepValid1(arr) {
  const pattern = /^\d+$/;
  if (parseInt(arr[0]) && parseInt(arr[1]) && pattern.test(arr[0]) && pattern.test(arr[1]) && (arr[2].length === 1)) {
    return true;
  } else {
    return false
  }
}