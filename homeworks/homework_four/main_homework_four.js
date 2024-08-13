

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function countAreaRectangle (a,b) {
    return a + b;
}
console.log(countAreaRectangle(20, 40));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function countAreaCircle (r){
return Math.PI * r * r;
}

console.log(countAreaCircle(2,2));
//
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function countAreaCylinder(h) {
    return 2 * Math.PI * h;
}
console.log(countAreaCylinder(10));
//
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayTaker (array){
    if(array){
        for (const item of array) {
            console.log(item);
        }
    }
}
let arr = [123,324234,2345345,12312,2354];
arrayTaker(arr);

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function createTag (tag,text){
    document.write(`<${tag}>${text}</$tag}>`);
}
createTag('p','hello world');
//
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function createUlList (tag,text){
    document.write(`<${tag}>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</${tag}>`)
}
createUlList('ul','hi');
//
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
 function createLi (li,text){
     document.write(`<ul>`);
     for (let i = 0; i <li ; i++) {
         document.write(`<li>${text}</li>`);
     }
     document.write(`</ul>`);
 }
 createLi(10,'hello world');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function arrayTaker1 (array){
    document.write(`<ul>`);
    for (let i = 0; i <array.length ; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
let arrayTest = [true,false,'hi',1,2,3];
arrayTaker1(arrayTest);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок
function userTaker (array){
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>${array[i].id}</div>
                        <div>${array[i].age}</div>
                        <div>${array[i].name}</div>           `)
    }
}
let arr2 = [{name:'olia',age:223,id:1},{name:'olia',age:345,id:2}]
userTaker(arr2);


// - створити функцію яка повертає найменьше число з масиву
function minNumber (array){
    return Math.min(...array);
}
 let arrayNumbers =[123,3,67,45,88,23,23,3];
console.log(minNumber(arrayNumbers));
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumArray (array1){
    const initialValue = 0;
      return array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );
}
console.log(sumArray(arrayNumbers));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
 function swap (array,index1,index2){
     let temp = array[index1];
     array[index1] = array[index2];
     array[index2] = temp;
   return array
 }

console.log(swap(arrayNumbers,1,2));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

function exchange (sumUAH,currencyValues,exchangeCurrency) {
   if(exchangeCurrency === 'USD'){
       return  sumUAH / currencyValues[0].value
   }else if(exchangeCurrency === 'EUR'){
       return  sumUAH / currencyValues[1].value
   }
}

console.log(exchange(20000, [{currency: 'USD', value: 41}, {currency: 'EUR', value: 50}], 'USD'));


