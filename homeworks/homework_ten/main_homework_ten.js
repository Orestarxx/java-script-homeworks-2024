
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
 let buttonSwitch = document.getElementById('switch');
 buttonSwitch.onclick = function () {
document.getElementById('toggle').classList.toggle('hidden');
 }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let firstForm = document.forms[0];
    console.log(firstForm);
firstForm.onsubmit = function (ev) {
    ev.preventDefault()
    let age = +firstForm[0].value;
    if(typeof age === 'number'){
        if(age <= 0){
            alert('can`t be zero or less')
        }else if(age >= 1 && age < 18){
            alert('too yong');
        }else if(age >= 18 && age <= 100){
            alert('welcome');
        }
    }else{
        alert('it`s not a number');
    }
}

// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let userForm = document.getElementById('userForm');
console.log(userForm);
userForm.onsubmit = function (ev){
    ev.preventDefault()
  let obj = {name:userForm[0].value,surName:userForm[1].value,age:+userForm[2].value};
   let userBuilder = document.getElementById('userBuilder');
   let userName = document.createElement("div");
   userName.innerText = `name: ${obj.name}`;
    let userSurName = document.createElement("div");
    userSurName.innerText = `surName: ${obj.surName}`;
    let userAge = document.createElement("div");
    userAge.innerText = `age: ${obj.age}`;
   userBuilder.append(userName,userSurName,userAge);
}
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let divAdd = document.getElementById('addOne');
let number = +localStorage.getItem('num');
number++;
localStorage.setItem('num',number);
divAdd.innerText = number;

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
let sessionList = JSON.parse(localStorage.getItem('sessionList')) || [];
sessionList.push(new Date());
localStorage.setItem('sessionList',JSON.stringify(sessionList));


    // створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let calculatorInput = document.getElementById('calculator');
let result = document.getElementById('result');
calculatorInput.oninput = function () {

 result.innerText = calculatorInput.value * 2.20462;
}

// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName,objectToAdd) {
    let addedArray = JSON.parse(localStorage.getItem(`${arrayName}`)) || [];
    addedArray.push(objectToAdd);
    localStorage.setItem(`${arrayName}`,JSON.stringify(addedArray));
}
addToLocalStorage('user',{name:'Ivan'});
addToLocalStorage('car',{carName:'tesla'})


// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається



// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


