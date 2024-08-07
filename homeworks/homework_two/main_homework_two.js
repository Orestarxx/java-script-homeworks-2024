
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

const wWeather = [
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



// Логічні розгалуження:


//     - Є змінна х, якій ви надаєте довільне числове значення.

let x = -3;
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x !== 0){
    console.log('correct');
}else{
    console.log('incorrect');
};

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
let time = 0;
// (в першу, другу, третю или четверту частину години).

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".