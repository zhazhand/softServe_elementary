function isEmptyField(arr, tmpl) {
  return arr.some(x => {
    if (typeof tmpl === 'number') {
      x = +x;
    }
    return x === tmpl
  });
}

function isTooMuchLength(elem, len) {
  return (elem > len) ? `слишком большая длина (>${len})` : false;
}

function clearFormBackground(cl = 'bg-warning') {
  let form = document.forms.myForm;
  for (let i = 0; i < form.length; i++) {
    if (form[i].classList.contains(cl)) {
      form[i].classList.remove(cl);
    }
  }
}

function isMatchPattern(arr, patrn, shift = 0, cl = 'bg-warning') {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (!patrn.test(arr[i])) {
      document.forms.myForm[i + shift].classList.add(cl);
      flag = true;
    }
  }
  return flag;
}

//count summa
function getSum(par) {
  let sum = 0;

  for (let i = 0; i < par.length; i++) {
    sum += parseInt(par[i]);
  }
  return sum;
}