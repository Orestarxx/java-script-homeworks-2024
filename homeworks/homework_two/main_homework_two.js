
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const ArrayEnyType = ['let do it',23,true,false,'do it right','get through','call the police',45,69,'arrow'];
console.log(
    ArrayEnyType[0],
    ArrayEnyType[1],
    ArrayEnyType[2],
    ArrayEnyType[3],
    ArrayEnyType[4],
    ArrayEnyType[5],
    ArrayEnyType[6],
    ArrayEnyType[7],
    ArrayEnyType[8],
    ArrayEnyType[9],
    );
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const booksFirstList = [
    {title:'book1',
    pageCount:235,
    genre:'horror'
    },
    {title:'book2',
    pageCount:566,
    genre:'western'
    },
    {title:'book3',
    pageCount:1230,
    genre:'comedy'
    }
];
console.log(booksFirstList)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється масивом. Кожен автор має поля name та age.
const booksSecondList = [
    {title:'book1',
        pageCount:235,
        genre:'horror',
        authors:[
            {name:'First',age:25},{name:'second',age:26},{name:'third',age:30}
        ]

    },
    {title:'book2',
        pageCount:566,
        genre:'western',
        authors:[
            {name:'First',age:22},{name:'second',age:34},{name:'third',age:54}
        ]
    },
    {title:'book3',
        pageCount:1230,
        genre:'comedy',
        authors:[
            {name:'First',age:67},{name:'second',age:34},{name:'third',age:45}
        ]
    }
];
console.log(booksSecondList[2].authors[2].age);
console.log(booksSecondList[1].genre);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const Users = [
    { name:'Babayko',
    username:'legend killer',
    password:'123555gg1234'},
    { name:'Babayko',
    username:'legend killer',
    password:'1236666gg1234'},
    { name:'Babayko',
    username:'legend killer',
    password:'1237777gg1234'},
    { name:'Babayko',
    username:'legend killer',
    password:'128888gg1234'},
    { name:'Babayko',
    username:'legend killer',
    password:'12346g1234'},
    { name:'Babayko',
    username:'legend killer',
    password:'12334gg1234'},
    { name:'Babayko',
    username:'legend killer',
    password:'1222234gg1234'},
    { name:'Babayko',
    username:'legend killer',
    password:'123443434gg1234'},
    { name:'Babayko',
    username:'legend killer',
    password:'1234gg122342334'},
    { name:'Babayko',
    username:'legend killer',
    password:'1234gg1234234234'}
];
console.log(
    Users[0].password,
    Users[1].password,
    Users[2].password,
    Users[3].password,
    Users[4].password,
    Users[5].password,
    Users[6].password,
    Users[7].password,
    Users[8].password,
    Users[9].password,
    );


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

const Weather = [
    {day:'Monday',
    morning:19,
    middleDay:21,
    evening:17},
    {day:'Tuesday',
    morning:18,
    middleDay:20,
    evening:16},
    {day:'Wednesday',
    morning:15,
    middleDay:18,
    evening:14},
    {day:'Thursday',
    morning:19,
    middleDay:25,
    evening:19},
    {day:'Friday',
    morning:19,
    middleDay:24,
    evening:20},
    {day:'Saturday',
    morning:21,
    middleDay:28,
    evening:21},
    {day:'Sunday',
    morning:23,
    middleDay:30,
    evening:22},
];
console.log(Weather);


// Логічні розгалуження:


//     - Є змінна х, якій ви надаєте довільне числове значення.

let x = -3;
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x !== 0){
    console.log('correct');
}else{
    console.log('incorrect');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
let time = 45;
// (в першу, другу, третю или четверту частину години).


if (time >= 0 && time <= 15){
    console.log('1');
}else if (time > 15 &&time <= 30){
    console.log('2');
}else if (time > 30 && time <= 45){
    console.log('3');
}else if (time > 45 && time <= 59) {
    console.log('4')
}else {
    console.log('error')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day = 'thursday';

switch (day){
    case 'monday':
        console.log('doing homework');
        break;
    case 'tuesday':
        console.log('playing pc');
        break;
    case 'wednesday':
        console.log('working');
        break;
    case 'thursday':
        console.log('go out with friends');
        break;
    case 'friday':
        console.log('making some dishes');
        break;
    case 'saturday':
        console.log('playing football');
        break;
    case 'sunday':
        console.log('hanging around');
        break;
    default:
        console.log('its not a day of the week');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 789;
let b = 789;
if(a>b){
    console.log(a);
}else if (b > a ){
    console.log(b);
}else if (a === b){
    console.log('equal');
}else{
    console.log('it`s not a number');
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
  let anyMeaning = 0;
 if(!anyMeaning){
     anyMeaning = 'default';
     console.log(anyMeaning);
 }else {
     console.log('hello world');
 }

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];


    if (courses[0].monthDuration > 5){
        console.log(courses[0].title, 'supper');
    }
    if (courses[1].monthDuration > 5){
    console.log(courses[1].title, 'supper');
    }
    if (courses[2].monthDuration > 5){
    console.log(courses[2].title, 'supper');
    }
    if (courses[3].monthDuration > 5){
    console.log(courses[3].title, 'supper');
    }
    if (courses[4].monthDuration > 5){
    console.log(courses[4].title, 'supper');
    }
    if (courses[5].monthDuration > 5){
    console.log(courses[5].title, 'supper');
    }


console.log(courses);
for (const course of courses) {
    let modules = course.modules;
    for (const module of modules) {
        if(module === 'python advanced'){
            console.log(course);
        }
    }
}


let users = [
    {name: 'vasya', age: 31, status: false, gender:'male'},
    {name: 'petya', age: 30, status: true ,gender:'male'},
    {name: 'kolya', age: 29, status: true, gender:'male'},
    {name: 'olya', age: 28, status: false, gender:'female'},
    {name: 'max', age: 30, status: true, gender:'male'},
    {name: 'anya', age: 31, status: false, gender:'female'},
    {name: 'oleg', age: 28, status: false, gender:'male'},
    {name: 'andrey', age: 29, status: true, gender:'male'},
    {name: 'masha', age: 30, status: true, gender:'female'},
    {name: 'olya', age: 31, status: false, gender:'female'},
    {name: 'max', age: 31, status: true, gender:'male'}
];
//завдання "ТЦК", знайти ухилянтів
for (const user of users) {
    if(user.age >= 30 && user.status === true){
        console.log(user);
    }
}
//знайти ухилянта Максима
for (const user of users) {
    if(user.name === 'max'){
        console.log(user,'опа,йдемо провіримо данні');
    }
}
//їде маршрутка 40 зупиняємо і витягаємо всіх пациків
for (const user of users) {
    if (user.age >= 30 && user.status === true && user.gender === 'male'){
        console.log(user,'ухилянти знайдені');
    }
}