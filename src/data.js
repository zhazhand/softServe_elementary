const tasks = [{
  heading: 'Шахматная доска',
  input: 'длина, ширина, символ для отображения',
  output: 'строка с представлением шахматной доски',
  statement: `Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:<br>
<pre class="p-1">*  *  *  *  *  * \n *  *  *  *  *  *\n*  *  *  *  *  * \n *  *  *  *  *  *</pre>`,
  inputFields: `<div class="col"><label>Высота:</label><input type="text" class="form-control" placeholder="высота"></div>
  <div class="col"><label>Ширина:</label><input type="text" class="form-control" placeholder="ширина"></div>
  <div class="col"><label>Символ для отображения:</label><input type="text" class="form-control" placeholder="символ" minlength="1" maxlength="1"></div>`
},
{
  heading: 'Анализ конвертов',
  input: 'объекты <i>конверт1</i> и <i>конверт2</i>',
  output: 'номер конверта, если вложение возможно, 0 – если вложение невозможно',
  statement: `Есть два конверта со сторонами (a,b) и (c,d). Требуется определить, можно ли один конверт вложить в другой.
 Программа должна обрабатывать ввод чисел с плавающей точкой.`,
  inputFields: `<div class="col"><label>Длина конверта 1:</label><input type="text" class="form-control" placeholder="длина 1"></div>
  <div class="col"><label>Ширина конверта 1:</label><input type="text" class="form-control" placeholder="ширина 1"></div>
  <div class="col"><label>Длина конверта 2:</label><input type="text" class="form-control" placeholder="длина 2"></div>
  <div class="col"><label>Ширина конверта 2:</label><input type="text" class="form-control" placeholder="ширина 2">`
},
{
  heading: 'Сортировка треугольников',
  input: 'массив объектов <i>треугольник</i>',
  output: 'упорядоченный массив имён треугольников',
  statement: `Вывести треугольники в порядке убывания их площади.<br>
<i class="font-weight-bold m-3">Примечание:</i><br>
  <span class="pl-5">•	Расчёт площади треугольника должен производится по формуле Герона.</span><br>
  <span class="pl-5">•	Каждый треугольник определяется именами вершин и длинами его сторон.</span><br> 
  <span class="pl-5">•	Приложение должно обрабатывать ввод чисел с плавающей точкой:</span><br>
  <pre class="p-4">{\n  vertices: ‘ABC’,\n  a: 10,\n  b: 20,\n  c: 22.36\n}</pre>`,
  inputFields: `<div class="col"><label>Вершины:</label><input type="text" class="form-control" placeholder="вершины" minlength="3" maxlength="3"></div>
  <div class="col"><label>Длина стороны 1:</label><input type="text" class="form-control" placeholder="длина 1"></div>
  <div class="col"><label>Длина стороны 2:</label><input type="text" class="form-control" placeholder="длина 2"></div>
  <div class="col"><label>Длина стороны 3:</label><input type="text" class="form-control" placeholder="длина 3">`
},
{
  heading: 'Палиндром',
  input: 'число',
  output: 'извлеченный максимальный из числа палиндром либо 0, если извлечение не удалось',
  statement: `Проверить является ли число или его часть палиндромом. Например, число 1234437 не является палиндромом,
 но является палиндромом его часть 3443.
 Числа меньшие, чем 10 палиндромом не считать.`,
  inputFields: `<div class="col"><label>Проверяемое число:</label><input type="text" class="form-control" placeholder="число">`
},
{
  heading: 'Счастливые билеты',
  input: 'объект <i>context</i> с полями <i>min</i> и <i>max</i>',
  output: 'объект с информацией о победившем методе и количестве счастливых билетов для каждого способа подсчёта',
  statement: `Есть 2 способа подсчёта счастливых билетов:<br>
 <i class="p-3">1. Простой — если на билете напечатано шестизначное число,
  и сумма первых трёх цифр равна сумме последних трёх, то этот билет считается счастливым.</i><br>
 <i class="p-3">2. Сложный — если сумма чётных цифр билета равна сумме нечётных цифр билета,
  то билет считается счастливым.</i><br>
 Определить программно какой вариант подсчёта счастливых билетов даст их большее количество на заданном интервале.`,
  inputFields: `<div class="col"><label>Минимальное значение:</label><input type="text" class="form-control" minlength="6" maxlength="6" placeholder="минимальное значение"></div>
  <div class="col"><label>Максимальное значение:</label><input type="text" class="form-control" minlength="6" maxlength="6" placeholder="максимальное значение"></div>`
},
{
  heading: 'Числовая последовательность',
  input: 'длина и значение минимального квадрата',
  output: 'строка с рядом чисел',
  statement: `Вывести через запятую ряд длиной n, состоящий из натуральных чисел, квадрат которых не меньше заданного m.`,
  inputFields: `<div class="col"><label>Длина ряда:</label><input type="text" class="form-control" placeholder="длина ряда"></div>
  <div class="col"><label>Значение минимального квадрата:</label><input type="text" class="form-control" placeholder="значение минимального квадрата"></div>`
},
{
  heading: 'Ряд Фибоначчи для диапазона',
  input: 'объект <i>context</i> с полями <i>min</i> и <i>max</i>, либо с полем <i>length</i> ',
  output: 'массив чисел',
  statement: `Вывести все числа Фибоначчи, которые удовлетворяют переданному в функцию ограничению:
 находятся в указанном диапазоне, либо имеют указанную длину.`,
  inputFields: `<div class="col"><label>Минимальное значение / указанная длина:</label><input type="text" class="form-control" placeholder="минимальное значение / указанная длина"></div>
  <div class="col"><label>Максимальное значение:</label><input type="text" class="form-control" placeholder="максимальное значение"></div>`
}
];

const failMessage = [
'вводное поле не может быть пустым',         //[0]
'вводное поле не может быть нулём',           //[1]
'неверные входные параметры',                 //[2]
'слишком большая длина',                      //[3]
'поле максимум не может быть меньше поля минимум',//[4]
'совпадают имена вершин',                     //[5]
'совпадают имена треугольников',              //[6]
'сумма двух сторон не может быть меньше третьей стороны'//[7]
]