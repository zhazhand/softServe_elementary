function solveTask5(params) {
  clearFormBackground();

  if (isValid5(params)) {
    return JSON.stringify(isValid5(params))
  }

  return JSON.stringify(countLuckyTickets(params));
}

//easy way
function checkEasyWay(par) {
  let str = par.toString();
  let part1 = str.slice(0, 3);
  let part2 = str.slice(3);

  return getSum(part1) === getSum(part2) ? 1 : 0;
}

//hard way
function checkHardWay(par) {
  let str = par.toString();
  let arrOdd = [];
  let arrEven = [];

  for (let i = 0; i < str.length; i++) {
    str[i] % 2 === 1 ? arrOdd.push(str[i]) : arrEven.push(str[i]);
  }

  return getSum(arrOdd) === getSum(arrEven) ? 1 : 0;

}

//validate
function isValid5(params) {
  let obj = {
    status: 'неудача'
  };
  const pattern = /^\d{6}$/;

  if (isEmptyField(params, '')) {
    obj.reason = failMessage[0];
    return obj;
  }
  if (isEmptyField(params, 0)) {
    obj.reason = failMessage[1];
    return obj;
  }
  if (isMatchPattern(params, pattern)) {
    obj.reason = failMessage[2];
    return obj;
  }
  if ((params[0]-params[1])>0) {
    obj.reason = failMessage[4];
    return obj;
  }
  return false;
}

//main function
function countLuckyTickets(par) {

  let result = {};
  let easyWayAmount = 0;
  let hardWayAmount = 0;
  let current = parseInt(par[1]);
  let min = parseInt(par[0]);

  while (current >= min) {
    easyWayAmount += checkEasyWay(current);
    hardWayAmount += checkHardWay(current);
    current--;
  }

  result.easyMethod = easyWayAmount;
  result.difficultMethod = hardWayAmount;
  result.message = easyWayAmount > hardWayAmount ? "простой метод победил" :
    (easyWayAmount < hardWayAmount ? "сложный метод победил" : "оба метода равны");

  return result;

}