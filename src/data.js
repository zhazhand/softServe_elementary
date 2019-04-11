const tasks = [{
    heading: 'Шахматная доска',
    input: 'длина, ширина, символ для отображения',
    output: 'строка с представлением шахматной доски',
    statement: `Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:<br>
  <pre class="p-1">*  *  *  *  *  * \n *  *  *  *  *  *\n*  *  *  *  *  * \n *  *  *  *  *  *</pre>`
  },
  {
    heading: 'Анализ конвертов',
    input: 'объекты <i>конверт1</i> и <i>конверт2</i>',
    output: 'номер конверта, если вложение возможно, 0 – если вложение невозможно',
    statement: `Есть два конверта со сторонами (a,b) и (c,d). Требуется определить, можно ли один конверт вложить в другой.
   Программа должна обрабатывать ввод чисел с плавающей точкой.`
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
    <pre class="p-4">{\n  vertices: ‘ABC’,\n  a: 10,\n  b: 20,\n  c: 22.36\n}</pre>`
  },
  {
    heading: 'Палиндром',
    input: 'число',
    output: 'извлеченный максимальный из числа палиндром либо 0, если извлечение не удалось',
    statement: `Проверить является ли число или его часть палиндромом. Например, число 1234437 не является палиндромом,
   но является палиндромом его часть 3443.
   Числа меньшие, чем 10 палиндромом не считать.`
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
   Определить программно какой вариант подсчёта счастливых билетов даст их большее количество на заданном интервале.`
  },
  {
    heading: 'Числовая последовательность',
    input: 'длина и значение минимального квадрата',
    output: 'строка с рядом чисел',
    statement: `Вывести через запятую ряд длиной n, состоящий из натуральных чисел, квадрат которых не меньше заданного m.`
  },
  {
    heading: 'Ряд Фибоначчи для диапазона',
    input: 'объект <i>context</i> с полями <i>min</i> и <i>max</i>, либо с полем <i>length</i> ',
    output: 'массив чисел',
    statement: `Вывести все числа Фибоначчи, которые удовлетворяют переданному в функцию ограничению:
   находятся в указанном диапазоне, либо имеют указанную длину.`
  }
];
