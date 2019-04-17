function solveTask5(params) {
  let obj = getParams5(params);

  if (obj.status === 'успех') {
    return JSON.stringify(countLuckyTickets(obj));
  }
  return JSON.stringify(obj);
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
  const pattern = /^\d{6}$/;
  let obj = isValidParamsLength(arr, 2);

  if (obj.status === 'успех') {
    if (!pattern.test(arr[0]) || !pattern.test(arr[1]) || arr[1] < arr[0]) {
      obj.status = 'неудача';
      obj.reason = 'неверные входные параметры';
    }
  }
  return obj;
}

//get input parametrs
function getParams5(arr) {
  let obj = isValidParams5(arr);

  if (obj.status === 'успех') {
    obj.min = arr[0];
    obj.max = arr[1];
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
  result.message = easyWayAmount > hardWayAmount ? "простой метод победил" : (easyWayAmount < hardWayAmount ? "сложный метод победил" :
    "оба метода равны");

  return result;

}