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
console.log('done');
let array1 = []
function randomizer(arr) {
    for (let i = 0; i < 100; i++) {
       let random =  Math.random() *100;
       let number = Math.round(random);
       arr.push(number);
    }
}
randomizer(array1)
console.log(array1);
 let sortedArr = array1.sort((num1,num2) => num1 - num2);
 let newArrSorted = []
console.log(sortedArr);
sortedArr.filter(item =>{
    if(item % 2===0 && item !== 0){
        newArrSorted.push(item);
    }
});
console.log(newArrSorted);
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
let email = 'someemail@gmail.com';
let email1 = 'someeMAIL@gmail.com';
let email2 = 'someeMAIL@i.ua';
let email3 = 'somee.mail@gmail.com';

function capitalize(str) {
    let change = str.charAt(0).toUpperCase();
    return str.replace(str.charAt(0),change);
}
 let newOne = capitalize(email);
let arrayOfValidatedStr = []
arrayOfValidatedStr.push(email,email1,email2,email3);
let validatedArr = []
 let form = document.forms[0];
form.addEventListener('submit',function (ev) {
    ev.preventDefault()
    let object = {email:form[0].value}
validatedArr.push(object);

})

function validator(str,arr) {
    if (str) {
        if (str.endsWith('@gmail.com')) {
            let toLowerCase = str.toLowerCase();
            if (toLowerCase.lastIndexOf('.', 9) !== -1) {
                let clearPoint = toLowerCase.lastIndexOf('.', 9);
                if (clearPoint !== -1) {
                    let newStr = toLowerCase.replace('.', '');
                    arr.push({email:newStr});
                }
            } else if (toLowerCase.lastIndexOf('-', 9) !== -1) {
                let clearDash = toLowerCase.lastIndexOf('-', 9);
                if (clearDash !== -1) {
                    let clearDash = toLowerCase.replace('-', '');
                    arr.push({email:clearDash});
                }
            } else if (toLowerCase.lastIndexOf('_', 9) !== -1) {
                let clearLowDash = toLowerCase.lastIndexOf('_', 9);
                if (clearLowDash !== -1) {
                    let lowDash = toLowerCase.replace('_', '');
                    arr.push({email:lowDash});
                }
            }else{
                arr.push({email:toLowerCase})
            }
        }
    }
}
validator(email3,validatedArr);
validator(email,validatedArr);
validator(email1,validatedArr)
console.log(validatedArr);
