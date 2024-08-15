
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let countAreaRectangle = (a,b) => a * b;
console.log(countAreaRectangle(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let countAreaCircle = r => Math.PI * r * r;
console.log(countAreaCircle(5, 4));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let countAreaCylinder = h => 2 * Math.PI * h;
console.log(countAreaCylinder(10));
// - створити функцію яка приймає масив та виводить кожен його елемент
let  arr = [1,2,3,4,5,6,7,8,9];
let arrayTaker = (array) =>{
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
arrayTaker(arr);

// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

let printerToDocument = (text) =>{
    document.write(`<p>${text}</p>`)
}
printerToDocument('hello world');

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
let ulAndLiPrinter = (text) =>{
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
                  </ul>`);
}
ulAndLiPrinter('hi');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим
 let liPrinter = (text,li) => {
     document.write(`<ul>`)
     for (let i = 0; i < li; i++) {
         document.write(`<li>${text}</li>`);
     }
     document.write(`</ul>`)
 }
 liPrinter('hello!',50);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrayAnyType = [1,2,3,'let','it','go',true,false,true];
let anyTypePrinter = (arrayAnyType) =>{
    document.write(`<ul>`);
    for (let i = 0; i < arrayAnyType.length; i++) {
        const item = arrayAnyType[i];
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
anyTypePrinter(arrayAnyType);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок
 array = [{id:1,name:'jack',age:23},{id:2,name:'Paul',age:34},{id:3,name:'Ivan',age:44},{id:4,name:'Orest',age:4}];
let objTaker = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
            document.write(`<div>${arrElement.id}</div>
                            <div>${arrElement.name}</div>
                            <div>${arrElement.age}</div>              
                          `);
    }
}
objTaker(array);

// - створити функцію яка повертає найменьше число з масиву
 let minNum = [1,2,3,4,5,6,7,8,9];
let minNumber = (arr) => Math.min(...arr);
console.log(minNumber(minNum));
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let countItems = (arr) =>{
    let initial = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        initial = initial + arrElement;
    }
    return initial;
}
console.log(countItems(minNum));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах

let swapIndex = (arr,index1,index2) =>{
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp
    return arr
}
console.log(swapIndex(minNum, 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

let exchange = (sumUAN,currencyValues,exchangeCurrency) =>{
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAN / item.value;
        }
    }
}
console.log(exchange(41000, [{currency: 'USD', value: 41}, {currency: 'EUR', value: 43}], 'EUR'));

