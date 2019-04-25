function solveTask2(params) {

  if (isValid2(params)) {
    return JSON.stringify(isValid2(params));
  }
  return JSON.stringify(compareEnvelopes(getParams(params)));
}

//get input parameters
function getParams(arr) {
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

//main function
function compareEnvelopes(par) {
  let large1;
  let large2;
  let small1;
  let small2;

  //the largest size of 1 envelope
  if (parseFloat(par[0].height) > par[0].width) {
    large1 = parseFloat(par[0].height);
    small1 = parseFloat(par[0].width);
  } else {
    small1 = parseFloat(par[0].height);
    large1 = parseFloat(par[0].width);
  }console.log('large1',large1)

  //the largest size of 2 envelope
  if (parseFloat(par[1].height) > par[1].width) {
    large2 = parseFloat(par[1].height);
    small2 = parseFloat(par[1].width);
  } else {
    small2 = parseFloat(par[1].height);
    large2 = parseFloat(par[1].width);
  }console.log('large2',large2)

  if (large1 > large2 && small1 > small2) {
    return 2;
  } else if (large2 > large1 && small2 > small1) {
    return 1;
  } else {
    return 0;
  }
}

//validate
function isValid2(params) {
  let obj = {
    status: 'неудача'
  };
  const pattern = /^([0-9]*[.])?[0-9]+$/;


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
  return false;
}