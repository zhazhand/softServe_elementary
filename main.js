const nav = document.querySelector('nav'),
taskHeading = document.querySelector('h2'),
taskInputParameters = document.querySelector('.inputParameters>span'),
taskOutputParameters = document.querySelector('.outputParameters>span'),
taskStatement = document.querySelector('.statement'),
button = document.querySelector('button'),
result = document.querySelector('.result>pre');

let index = 0,
parametersOfTask = document.getElementById('inp');

changeTask(0);

nav.addEventListener('click', (e) => {
e.preventDefault();
const children = nav.children;
index = e.target.innerText.slice(-1) - 1;
changeTask(index);
changeActiveClass(children, 'active', index);
clearContent(result);
});

button.addEventListener('click', main);

parametersOfTask.addEventListener('input', (e) => {
let str = e.target.value;
e.target.value = str.replace(' ', '');
button.disabled = str ? null : true;
})

function changeTask(ind) {
taskHeading.innerHTML = tasks[ind].heading;
taskInputParameters.innerHTML = tasks[ind].input;
taskOutputParameters.innerHTML = tasks[ind].output;
taskStatement.innerHTML = tasks[ind].statement;
}

function changeActiveClass(elems, cl, ind) {
for (let i = 0; i < elems.length; i++) {
  if (elems[i].classList.contains(cl)) {
    elems[i].classList.remove(cl);
  }
}
elems[ind].classList.add(cl);
}

function clearContent(elem){
  elem.innerHTML = '';
}

function getParam(str) {
return str.split(',');
}

function main() {
let res,
  params = getParam(parametersOfTask.value);

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