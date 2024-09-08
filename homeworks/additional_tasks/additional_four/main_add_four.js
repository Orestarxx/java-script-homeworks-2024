// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let count = 0;
arrayOfNumbers = [1,45,45,45,45,45,65,78];
function addNumbers(arrayOfItems) {
    for (let i = 0; i < arrayOfItems.length; i++) {
        const arrayOfItem = arrayOfItems[i];
        count += arrayOfItem;
    }
}
addNumbers(arrayOfNumbers);
console.log(count);
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
    // Двожина масиву від 2 до 100
let array = [22,44,56,7,0,23,56,0,6,9,0,1,5,0,76,99,0,76,56,34,0,45,7,0,9,5,0,1,2,0,34,0,4];
function remover(arr) {
    for (const item of arr) {
        if(item === 0){
          let zero  =  arr.indexOf(item);
         let zeroArr = arr.splice(zero,1);
            arr.push(zeroArr[0]);
        }
    }
}
remover(array);
console.log(array);
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let string = "HTML JavaScript PHP";

function strReform(str) {
    let upper = str.toUpperCase()
    return upper.replaceAll(' ','-');
}
 let neStr =strReform(string);
console.log(neStr);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// - Дано список імен.
let n1 = 'harry..Potter'
let n2 = 'ron---Whisley'
let n3 = 'hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let arr = [];
arr.push(n1,n2,n3);
let newArr = []
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
function toUpper(arr,newArr) {
    for (const item of arr) {
        let changedName =  item.charAt(0).toUpperCase()
         let newStr = item.replace(item.charAt(0),changedName);
        newArr.push(newStr);
    }
}
 toUpper(arr,newArr);
console.log(newArr);
let cleanedArr = []
function cleaner(arr,newArr) {
    for (const item of arr) {
       let cleaned = item.replaceAll('-',' ').replaceAll('.',' ').replaceAll('_',' ');
       newArr.push(cleaned);
    }
}
cleaner(newArr,cleanedArr);
console.log(cleanedArr);

