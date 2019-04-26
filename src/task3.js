function solveTask3(params) {

  let data;
  if (localStorage.getItem('saveArray')) {
    data = JSON.parse(localStorage.getItem('saveArray'));
  } else {
    data = [];
  }

  if (isValid3(params, data)) {
    return JSON.stringify(isValid3(params, data));
  } else {

    let it = {
      'vertices': params[0],
      'a': params[1],
      'b': params[2],
      'c': params[3]
    };
    data.push(it);
  }
  let arrayOfObj = JSON.stringify(data);
  localStorage.setItem('saveArray', arrayOfObj);

  return `${arrayOfObj}\n${JSON.stringify(createArray(data))}`;
}

//area of triangle
function getAreaOfTriangle(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

//check input parameters
function isValid3(par, data) {
  const regSide = /^([0-9]*[.])?[0-9]+$/;
  const regTitle = /^[A-Z]{3}$/i;
  let obj = {
    status: 'неудача'
  }
  let vertices = par.slice(0, 1);
  let sides = par.slice(1);
  let tmpArray = data.map(item => item.vertices);
  tmpArray.push(par[0]);

  if (isEmptyField(par, '')) {
    obj.reason = failMessage[0];
    return obj;
  }
  if (isEmptyField(par, 0)) {
    obj.reason = failMessage[1];
    return obj;
  }
  if (isMatchPattern(vertices, regTitle) || isMatchPattern(sides, regSide)) {
    obj.reason = failMessage[2];
    return obj;
  }
  if (isSameName(vertices, false)) {
    obj.reason = failMessage[5];
    return obj;
  }
  if (isSameName(tmpArray, true)) {
    obj.reason = failMessage[6];
    return obj;
  }
  if (isSides(sides)) {
    obj.reason = failMessage[7];
    return obj;
  }

  return false;
}

//check unique name (array or string)
function isSameName(array, flag = true) {
  let arr = flag ? array : array[0];
  for (let i = 0; i < arr.length; i++) {
    let unique = arr[i].toUpperCase();
      unique = unique.split('').sort().join('');
    for (let j = i + 1; j < arr.length; j++) {
      let tmp = arr[j].toUpperCase();
        tmp = tmp.split('').sort().join('');
      if (tmp === unique) {
        return true;
      }
    }
  }
  return false;
}

//check length of sides
function isSides(arr) {

  if (parseFloat(arr[0]) >= (parseFloat(arr[1]) + parseFloat(arr[2])) ||
    parseFloat(arr[1]) >= (parseFloat(arr[2]) + parseFloat(arr[0])) ||
    parseFloat(arr[2]) >= (parseFloat(arr[1]) + parseFloat(arr[0]))) {
    return true;
  }

  return false;

}

//sort
function compareNumeric(a, b) {
  return (a.area > b.area) ? -1 : 1;
}

//main function
function createArray(par) {

  par.forEach(function (parItem) {
    parItem.area = getAreaOfTriangle(parItem.a, parItem.b, parItem.c);
  });
  par.sort(compareNumeric);
  let result = par.map(item => item.vertices.toUpperCase());
  return result

}