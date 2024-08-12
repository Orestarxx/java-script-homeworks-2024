// --створити масив з:
// - та вивести його в консоль

// - з 5 числових значень
let numArray = [1,2,3,4,5];
console.log(numArray);

// - з 5 стічкових значень
let strArray = ['Orest','Gans','Hello world','phone','fight'];
console.log(strArray);

// - з 5 значень стрічкового, числового та булевого типу
let booArray = [true,false,true,false,true];
console.log(booArray);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
console.log(strArray[0],strArray[1]);



// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let numbers = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
 let i = 0;

 while (i <numbers.length){
     console.log(numbers[i]);
     i++;
 }
console.log('*********************');

//     2. перебрати його циклом for


for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}
console.log('*********************');
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let zero = 0;
while(zero < numbers.length){
    if(zero % 2 === 0){
        console.log(numbers[zero]);
    }
    zero++;
}
console.log('***********');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(i % 2 === 0){
        console.log(number);
    }
}
console.log('****************')
// 5. перебрати циклом while та вивести  числа тільки парні  значення

let y = 0;
while (y <numbers.length){
    if(numbers[y] % 2 !== 0){
        console.log(numbers[y]);
    }
    y++;
}
console.log('****************');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (numbers[i] % 2 === 0){
        console.log(number);
    }
}
console.log('*******************');

// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 3 === 0){
        numbers[i] = 'okten';
    }
    console.log(number)
}
console.log('******************');
// 8. вивести масив в зворотньому порядку.
for (let i = numbers.length - 1; i >= 0; i--) {
    const number = numbers[i];
    console.log(number);
}


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//reverse
let arrayOfNumbers =[2,17,13,6,22,31,45,66,100,-18];

console.log('first one**************');

for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
    const number = arrayOfNumbers[i];
    console.log(number);
}
console.log('second one**************');

let reverse1 =arrayOfNumbers.length;
while(reverse1--){
    console.log(arrayOfNumbers[reverse1]);
}
console.log('third one***************');

let reverse2 = arrayOfNumbers.length;
while(reverse2 --){
    if(reverse2 % 2 === 0){
        console.log(arrayOfNumbers[reverse2]);
    }
}
console.log('forth one*************');
for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
    const item = arrayOfNumbers[i];
    if (i % 2 !== 0){
        console.log(item);
    }
}
console.log('fifth one********');

let reverse3 = arrayOfNumbers.length;
while(reverse3-- ){
    if(arrayOfNumbers[reverse3] % 2 === 0){
        console.log(arrayOfNumbers[reverse3]);
    }
}
console.log('sixth one*********');
for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
    const item = arrayOfNumbers[i];
        if(item % 2 === 0){
            console.log(item);
        }
}
console.log('seventh one**************');
for (let i = 0; i < arrayOfNumbers.length; i++) {
    const arrayOfNumber = arrayOfNumbers[i];
    if(arrayOfNumber % 3 !== 0){
        arrayOfNumbers[i] = 'okten';
    }
}
console.log(arrayOfNumbers);
console.log('************');
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrayNum = [1,2,3,4,5,6,7,8,9,10];
for (const number of arrayNum) {
    console.log(number);
}
console.log('*******************');
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arrayStr = ['aaaaaaaa','bbbbbbbb','cccccccccc','dddddddddd','eeeeeeeeeeeeeeee','ffffffffff','gggggggggg','gg','f','a'];
for (const string of arrayStr) {
    console.log(string);
}
console.log('*******************');
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let anyM = [true,false,'lol',1,5,false,'bbb',255,true,'gg'];
for (const anything of anyM) {
    console.log(anything);
}
console.log('****************');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

 let anyType = [true,false,'fffff',1,2,3,'dfdsf',false,true];
for (const element of anyType) {
    if (typeof element === "boolean"){
        console.log(element);
    }
}
console.log('******************');


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи


for (const element of anyType) {
    if (typeof element === "string"){
        console.log(element);
    }
}
console.log('*******************');


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


for (const element of anyType) {
    if (typeof element === "number"){
        console.log(element);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArr = [];
emptyArr[0] = 'okten';
emptyArr[1] = 'I got';
emptyArr[2] = 'what do you';
emptyArr[3] = 'want from';
emptyArr[4] = 'me';
emptyArr[5] = 'in this';
emptyArr[6] = 'task';
emptyArr[7] = 'ave okten';
emptyArr[8] = 'difficult';
emptyArr[9] = 'to fill it by hands';
console.log(emptyArr);
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 11 ; i++) {
    document.write(`<div>${i}</div>`);
    console.log(i);
}
console.log('***********************');
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i < 101; i++) {
     document.write(`<div>${i}</div>`);
    console.log(i);
}
console.log('***************************2');
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 2; i < 101; i+= 2) {
    document.write(`<div>${i}</div>`);
    console.log(i);
}
console.log('********************************2');
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i < 101; i++) {
    if (i % 2 === 0){
        document.write(`<div>${i}</div>`);
        console.log(i);
    }
}
console.log('****************************');
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 101; i++) {
    if (i % 2 !== 0){
        document.write(`<div>${i}</div>`);
        console.log(i);
    }
}
console.log('************************');
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {title:'book1',pages:2345,authors:['lenni Greghem','Homer Simpson','Bart Simpson'],genres:'aaa'},
    {title:'book22',pages:5444,authors:['Marge Simpson','Braian Grifin','Moe','Lisa Simpson'],genres:'dddd'},
    {title:'book333',pages:1123,authors:['Kartmen','Squbi Doo','Din Winchester'],genres:'ccccc'},
    {title:'book4444',pages:134,authors:['Sam Winchester'],genres:'ddddd'},
    {title:'book55555',pages:2312,authors:['Io','padge'],genres:'eeeeee'},
    {title:'book666666',pages:765,authors:['lenni Greghem'],genres:'fffffff'},
    {title:'book7777777',pages:4327,authors:['lenni Greghem'],genres:'gggggg'},
]
// -знайти наібльшу книжку.
let maxArray = [];
for (const book of books) {
    maxArray.push(book.pages);
}
let max = Math.max(...maxArray);
console.log(max);
for (const book of books) {
 if (max === book.pages){
     console.log(book);
 }
}
console.log('*************************');

// - знайти книжку/ки з найбільшою кількістю жанрів
//в мене тут буде з найбільшою кількістю авторів якщо ви не проти,бо я коли створював масив з обєктами трохи ключі переплутав
let length= [];
for (const book of books) {
    let lengthAuthors = book.authors.length;
    length.push(lengthAuthors);
}
 let maxAuthors = Math.max(...length);
console.log(maxAuthors);
for (const book of books) {
    if (book.authors.length === maxAuthors){
        console.log(book);
    }
}

console.log('*************************');

// - знайти книжку/ки з найдовшою назвою
let arrayMaxTitle = [];
for (const book of books) {
    let length = book.title.length;
    console.log(length);
    arrayMaxTitle.push(length);
}
let maxTitle =  Math.max(...arrayMaxTitle);
for (const book of books) {
    if(book.title.length === maxTitle){
        console.log(book)
    }
}
console.log('*************************');
// - знайти книжку/ки які писали 2 автори
for (const book of books) {
    if (book.authors.length === 2){
        console.log(book)
    }
}
console.log('*************************');
// - знайти книжку/ки які писав 1 автор
for (const book of books) {
    if (book.authors.length === 1){
        console.log(book)
    }
}