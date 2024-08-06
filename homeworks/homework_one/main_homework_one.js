//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let minusNineHundredNinetyNine = -999;
let oneTwoThree = 123;
let pi = 3.14;
let twoPointSeven = 2.7;
let sixteen = 16;
let booleanT = true;
let booleanF = false;
console.log(hello,owu,com,ua,one,ten,minusNineHundredNinetyNine,oneTwoThree,pi,twoPointSeven,sixteen,booleanT,booleanF);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Orest';
let lastName = 'Hanes';
let middleName = 'Yaroslavovich';
// let person = lastName+' '+firstName+' '+middleName;
let person = `${lastName} ${firstName} ${middleName}`
console.log(person);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a,typeof b,typeof c);

// - За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імям, По Батькові та роками. та вивести в консоль

let firstNameP = prompt();
console.log(firstNameP);
let lastNameP = prompt();
console.log(lastNameP);
let middleNameP = prompt();
console.log(middleNameP);