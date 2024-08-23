
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
    const fooTaker = [];
    if(object){
        for (const key in object) {
            if (typeof object[key] === 'function') {
                const copied = object[key].bind({});
                fooTaker.push({copied, key});
            }
        }
         let clonedObject = JSON.parse(JSON.stringify(object));
        for (const foo of fooTaker) {
            clonedObject[foo.key] = foo.copied;
            console.log(foo);
        }
        console.log(clonedObject);
        return clonedObject;
    }
    return 'ERROR';
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
    },
    barFoo(){

    }

};



console.log(user);
let newUser = copy(user);
console.log(newUser);
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

let user4 = {id:1}
let user5 = {...user4}
console.log(user5 === user4);



