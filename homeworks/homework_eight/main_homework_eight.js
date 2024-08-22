
// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

//перший варіант,але він лише одну функцію переносить

// function deepCopy(object) {
//     if(object){
//         for (const key in object) {
//             if(typeof object[key] === 'function'){
//                object.__proto__.object = object[key]
//             }
//         }
//         let transformed = JSON.parse(JSON.stringify(object));
//         return {...transformed,foo:object.__proto__.object}
//     }
//         return 'ERROR';
// }


function copy (object) {
    if(object){
    object.__proto__.array = [];
        for (const key in object) {
           if(typeof object[key] === 'function'){
               object.__proto__.array.push(object[key]);
           }
        }
        if(object.__proto__.array){
           let transformed = JSON.parse(JSON.stringify(object));
            for (const item of object.__proto__.array) {

            }
        return {...transformed,...object};
        }
    }
}
let user = {
    id:1,
    name:'Orest',
    surName:'Hanes',
    foo(){
        console.log('hello world');
    },
    bar(){
        console.log('hi');
    },
    car(){
        console.log('car');
    }
};

// user.__proto__.foo = function () {console.log(this);}
console.log(user);
let newUser = copy(user);
console.log(newUser);
newUser.foo()
newUser.bar()
newUser.car()

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
let newCourses = coursesAndDurationArray.map((course,index) =>({id:index+1,...course}));
console.log(newCourses);
