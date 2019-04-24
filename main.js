const nav = document.querySelector('nav');
const taskHeading = document.querySelector('h2');
const taskInputParameters = document.querySelector('.inputParameters>span');
const taskOutputParameters = document.querySelector('.outputParameters>span');
const taskStatement = document.querySelector('.statement');
const inputFields = document.querySelector('form .inputFields');
const button = document.querySelector('button');
const result = document.querySelector('.result>pre');
const form = document.querySelector('form');

let index = 0;
let parametersOfTask = document.forms.myForm;

changeTask(0);

nav.addEventListener('click', (e) => {
  e.preventDefault();
  const children = nav.children;
  index = getIndex(e.target);
  changeTask(index);
  changeActiveClass(children, 'active', index);
  clearContent(result);
  localStorage.removeItem('saveArray');
});

button.addEventListener('click', main);

function changeTask(ind) {
  taskHeading.innerHTML = tasks[ind].heading;
  taskInputParameters.innerHTML = tasks[ind].input;
  taskOutputParameters.innerHTML = tasks[ind].output;
  taskStatement.innerHTML = tasks[ind].statement;
  inputFields.innerHTML = tasks[ind].inputFields;
}

function changeActiveClass(elems, cl, ind) {
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].classList.contains(cl)) {
      elems[i].classList.remove(cl);
    }
  }
  elems[ind].classList.add(cl);
}

function clearContent(elem) {
  elem.innerHTML = '';
}

function getIndex(elem) {
  let parent = elem.parentNode;
  for (let i = 0; i < parent.children.length; i++) {
    if (parent.children[i] === elem) {
      return i;
    }
  }
}

function getParam(collection) {
  let arr = [];
  for (let i = 0; i < collection.length; i++) {
    arr.push(collection[i].value);    
  }
  return arr;
}

function main() {
  let res;
  let params = getParam(parametersOfTask);

  switch (index) {
    case 0:
      res = solveTask1(params);
      break;
    case 1:
      res = solveTask2(params);
      break;
    case 2:
      res = solveTask3(params);
      break;
    case 3:
      res = solveTask4(params);
      break;
    case 4:
      res = solveTask5(params);
      break;
    case 5:
      res = solveTask6(params);
      break;
    case 6:
      res = solveTask7(params);
      break;
  }
  return result.innerText = res;
}