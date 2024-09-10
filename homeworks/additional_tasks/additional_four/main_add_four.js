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


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let arrOfObj =  [{name: 'Dima', age: 13}, {model: 'Camry'}];
let arrayOfKeys = []
function getKey(array,newArr) {
    for (const item of array) {
        for (const key in item) {
            newArr.push(item[key]);
            // arrayOfKeys.push(key);
        }
    }
}
getKey(arrOfObj,arrayOfKeys);
console.log(arrayOfKeys);
//
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

let addresses = []
for (const user of users) {
    addresses.push(user.address);
}
console.log(addresses);

//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let wrap = document.getElementById('wrap');
let content = document.getElementById('content');
let ul = document.createElement('ul');
content.append(ul);

console.log(wrap);
for (const child of wrap.children) {
    let rule = child.children[0].innerText;
   let li = document.createElement('li');
   li.innerText = rule;
   ul.append(li);
}
