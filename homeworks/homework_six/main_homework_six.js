// - Перевести до великого регістру наступні стрінгові значення

let upperAndLowerCaseStr ='hello world, lorem ipsum, javascript is cool';
console.log(upperAndLowerCaseStr.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
console.log(upperAndLowerCaseStr.toLowerCase());
// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   ';
console.log(dirtyStr.trim());
// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
  let stringToArray = str => arrayStr = str.split(' ');
  console.log(stringToArray(str));
console.log('************');
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3,10,15,20];
function changeRow(array,direction) {
    if(direction === 'ascending'){
         return array;
    }else if(direction === 'descending'){
         return  array.reverse();
    }
}
console.log(changeRow(nums, 'descending'));
console.log('************');
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrayNums = [10,8,-7,55,987,-1011,0,1050,0];
 let newArr = arrayNums.map((item)=> item.toString());
console.log(newArr);
console.log('************');
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
    {title: 'C++', monthDuration: 8}
];

// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((index1,index2)=>{
    return index2.monthDuration - index1.monthDuration;
});
console.log(coursesAndDurationArray);
console.log('************');
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
coursesAndDurationArray.map((course)=>{
    if(course.monthDuration > 5){
        console.log(course);
    }
});
console.log('***************');
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newCourses = coursesAndDurationArray.map((course,index)=>{
    return {
        id: index +1,
        title:course.title,
        monthDuration:course.monthDuration
    }
});
console.log(newCourses);

let cards = [

    {cardSuit: 'clubs', value: 2, color:'black'},
    {cardSuit: 'clubs', value: 3, color:'black'},
    {cardSuit: 'clubs', value: 4, color:'black'},
    {cardSuit: 'clubs', value: 5, color:'black'},
    {cardSuit: 'clubs', value: 6, color:'black'}, //хреста
    {cardSuit: 'clubs', value: 7, color:'black'},
    {cardSuit: 'clubs', value: 8, color:'black'},
    {cardSuit: 'clubs', value: 9, color:'black'},
    {cardSuit: 'clubs', value: 10, color:'black'},
    {cardSuit: 'clubs', value: 'Jack', color:'black'},
    {cardSuit: 'clubs', value: 'Queen', color:'black'},
    {cardSuit: 'clubs', value: 'King', color:'black'},
    {cardSuit: 'clubs', value: 'Ace', color:'black'},


    {cardSuit: 'diamonds', value: 2, color:'red'},
    {cardSuit: 'diamonds', value: 3, color:'red'},
    {cardSuit: 'diamonds', value: 4, color:'red'},
    {cardSuit: 'diamonds', value: 5, color:'red'},
    {cardSuit: 'diamonds', value: 6, color:'red'}, //бубна
    {cardSuit: 'diamonds', value: 7, color:'red'},
    {cardSuit: 'diamonds', value: 8, color:'red'},
    {cardSuit: 'diamonds', value: 9, color:'red'},
    {cardSuit: 'diamonds', value: 10, color:'red'},
    {cardSuit: 'diamonds', value: 'Jack', color:'red'},
    {cardSuit: 'diamonds', value: 'Queen', color:'red'},
    {cardSuit: 'diamonds', value: 'King', color:'red'},
    {cardSuit: 'diamonds', value: 'Ace', color:'red'},


    {cardSuit: 'hearts', value: 2, color:'red'},
    {cardSuit: 'hearts', value: 3, color:'red'},
    {cardSuit: 'hearts', value: 4, color:'red'},
    {cardSuit: 'hearts', value: 5, color:'red'}, //черва
    {cardSuit: 'hearts', value: 6, color:'red'},
    {cardSuit: 'hearts', value: 7, color:'red'},
    {cardSuit: 'hearts', value: 8, color:'red'},
    {cardSuit: 'hearts', value: 9, color:'red'},
    {cardSuit: 'hearts', value: 10, color:'red'},
    {cardSuit: 'hearts', value: 'Jack', color:'red'},
    {cardSuit: 'hearts', value: 'Queen', color:'red'},
    {cardSuit: 'hearts', value: 'King', color:'red'},
    {cardSuit: 'hearts', value: 'Ace', color:'red'},



    {cardSuit: 'spades', value: 2, color:'black'},
    {cardSuit: 'spades', value: 3, color:'black'},
    {cardSuit: 'spades', value: 4, color:'black'},
    {cardSuit: 'spades', value: 5, color:'black'},
    {cardSuit: 'spades', value: 6, color:'black'}, //піка
    {cardSuit: 'spades', value: 7, color:'black'},
    {cardSuit: 'spades', value: 8, color:'black'},
    {cardSuit: 'spades', value: 9, color:'black'},
    {cardSuit: 'spades', value: 10, color:'black'},
    {cardSuit: 'spades', value: 'Jack', color:'black'},
    {cardSuit: 'spades', value: 'Queen', color:'black'},
    {cardSuit: 'spades', value: 'King', color:'black'},
    {cardSuit: 'spades', value: 'Ace', color:'black'},
    ];

// - знайти піковий туз
cards.map((card)=>{
    if(card.cardSuit === 'spades' && card.value === 'Ace'){
        console.log(card);
    }
});
console.log('*************');
// - всі шістки
cards.map((card)=>{
    if(card.value === 6){
        console.log(card);
    }
});
console.log('*****************');
// - всі червоні карти
cards.map((card)=>{
    if (card.color === 'red'){
        console.log(card);
    }
});
console.log('*****************');
// - всі буби
cards.map((card)=>{
    if(card.cardSuit === 'diamonds'){
        console.log(card);
    }
});
console.log('*****************');
// - всі трефи від 9 та більше
cards.map((card,index)=>{
    if(card.cardSuit === 'clubs' && index > 7){
        console.log(card);
    }
});
console.log('************');
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

 let sortedCards = cards.reduce((accumulator , card) =>{
     for (const key in accumulator) {
         if(card.cardSuit === key){
             accumulator[key].push(card);
         }
     }
            return accumulator;

},{clubs:[],diamonds:[],hearts:[],spades:[]});
console.log(sortedCards);
console.log('***********');
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let courses1 = [
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
courses1.map((course) =>{
    for (const element of course.modules) {
        if(element.startsWith('sass')){
            console.log(course);
        }
    }
});
console.log('******************');
courses1.map((course) =>{
    for (const element of course.modules) {
        if(element.startsWith('docker')){
            console.log(course);
        }
    }
})