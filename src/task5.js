function solveTask5(params) {
  let obj = isValidParams5(params);
  if (obj.status === 'удачный') {
    return JSON.stringify(countLuckyTickets(obj));
  }
  return JSON.stringify(obj);
}

//easy way
function checkEasyWay(par) {
  let str = par.toString();
  let part1 = str.slice(0, 3);
  let part2 = str.slice(3);

  return getSum(part1) == getSum(part2) ? 1 : 0;
}

//hard way
function checkHardWay(par) {
  let str = par.toString();
  let arrOdd = [];
  let arrEven = [];

  for (let i = 0; i < str.length; i++) {
    str[i] % 2 ? arrOdd.push(str[i]) : arrEven.push(str[i]);
  }

  return getSum(arrOdd) == getSum(arrEven) ? 1 : 0;

}

//count summa
function getSum(par) {
  let sum = 0;

  for (let i = 0; i < par.length; i++) {
    sum += parseInt(par[i]);
  }

  return sum;

}

//check input parameters
function isValidParams5(arr) {
  let obj = {};
  const pattern = /^\d{6}$/;

  if (arr.length === 2) {
    if (pattern.test(arr[0]) && pattern.test(arr[1]) && arr[1] > arr[0]) {
      obj = {
        status: 'удачный',
        min: arr[0],
        max: arr[1]
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


//main function
function countLuckyTickets(par) {

  let result = {};
  let easyWayAmount = 0;
  let hardWayAmount = 0;
  let current = parseInt(par.max);
  let min = parseInt(par.min);

  while (current >= min) {
    easyWayAmount += checkEasyWay(current);
    hardWayAmount += checkHardWay(current);
    current--;
  }

  result.easyMethod = easyWayAmount;
  result.difficultMethod = hardWayAmount;
  result.message = easyWayAmount > hardWayAmount ? "легкий метод победил" : (easyWayAmount < hardWayAmount ? "сложный метод победил" :
    "оба метода равны");

  return result;

}