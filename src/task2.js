function solveTask2(params) {
  let obj = getParams(params);

  if (obj.status === 'неудача') {
    return JSON.stringify(obj);
  }
  return JSON.stringify(compareEnvelopes(obj));
}

//check input parameters
function isValidParams2(arr) {
  const pattern = /^([0-9]*[.])?[0-9]+$/;
  let obj = isValidParamsLength(arr, 4);

  if (obj.status === 'успех') {
    for (let i = 0; i < arr.length; i++) {
      if (!pattern.test(arr[i])) {
        obj.status = 'неудача';
        obj.reason = 'неверные входные параметры';
        break;
      }
    }

  }
  return obj;
}

//get input parameters
function getParams(arr) {
  let obj = isValidParams2(arr);

  if (obj.status === 'успех') {
    let data = new Array(2);
    data[0] = {
      width: arr[0],
      height: arr[1]
    };
    data[1] = {
      width: arr[2],
      height: arr[3]
    };
    return data;
  }
  return obj;
}

//main function
function compareEnvelopes(par) {
  let large1;
  let large2;
  let small1;
  let small2;

  //the largest size of 1 envelope
  if (par[0].height > par[0].width) {
    large1 = par[0].height;
    small1 = par[0].width;
  } else {
    small1 = par[0].height;
    larget1 = par[0].width;
  }

  //the largest size of 2 envelope
  if (par[1].height > par[1].width) {
    large2 = parseFloat(par[1].height);
    small2 = parseFloat(par[1].width);
  } else {
    small2 = parseFloat(par[1].height);
    large2 = parseFloat(par[1].width);
  }

  if (large1 > large2 && small1 > small2) {
    return 2;
  } else if (large2 > large1 && small2 > small1) {
    return 1;
  } else {
    return 0;
  } 
}