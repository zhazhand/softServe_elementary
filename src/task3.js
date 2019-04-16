function solveTask3(params) {
  let data = isValidParams3(params);

  if (data.status === 'неудача') {
    return JSON.stringify(data);
  }
  return createArray(data)
}

//area of triangle
function areaOfTriangle(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

//get input data
function getInputData(arr) {
  let obj = isValidParamsLength(arr, 4, false);
  let arrOfData = [];

  if (obj.status === 'успех') {
    for (let i = 0; i < arr.length; i++) {
      let index = parseInt(i / 4);let tmp = i+4;
      if (!arrOfData[index]) {
        arrOfData[index] = {};
      }
      if (tmp % 4 === 0) {
        arrOfData[index]['vertices'] = arr[i];
      } else if (tmp % 4 === 1) {
        arrOfData[index]['a'] = arr[i];
      } else if (tmp % 4 === 2) {
        arrOfData[index]['b'] = arr[i];
      } else {
        arrOfData[index]['c'] = arr[i];
      }
    }

  } else {
    obj.status = 'неудача';
    obj.reason = 'неверные входные параметры';
    return obj;
  }
  return arrOfData;
}

//check input parameters
function isValidParams3(par) {
  const regSide = /^([0-9]*[.])?[0-9]+$/;
  const regTitle = /^[A-Z]{3}$/i;
  const obj = {
    status: 'неудача',
    reason: 'неверные входные параметры'
  }

  let data = getInputData(par);

  if (Array.isArray(data)) {
    if (checkSameName(data, 'vertices') || checkSides(data)) {
      return obj;
    }
    for (let i = 0; i < data.length; i++) {
      let element = data[i];
      if (!regTitle.test(element.vertices) || !regSide.test(element.a) || !regSide.test(element.b) || !regSide.test(element.c)) {
         return obj;
      }
    }
  }
  return data;
}

//check unique name
function checkSameName(arr, property) {
  let unique = arr[0][property];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][property] === unique) {
      return true;
    }
  }
  return false;
}

//check length of sides
function checkSides(arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (parseFloat(item.a) > (parseFloat(item.b) + parseFloat(item.c)) ||
     parseFloat(item.b) > (parseFloat(item.a) + parseFloat(item.c)) ||
     parseFloat(item.c) > (parseFloat(item.b) + parseFloat(item.a))) {
      return true;
    }
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
    parItem.area = areaOfTriangle(parItem.a, parItem.b, parItem.c);
  });
  par.sort(compareNumeric);
  let result = par.map(function (parItem) {
    return parItem.vertices
  })
  return result


}