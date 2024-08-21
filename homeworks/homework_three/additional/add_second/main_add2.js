// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (const city of citiesWithId) {
    for (const user of usersWithId) {
        if (city.user_id === user.id){
        user['address'] = city;
        }
    }
}
console.log(usersWithId);

// 1. Створити пустий масив та :
let arrayEven = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
for (let i = 1; i < 51; i++) {
    if (i % 2 === 0){
    arrayEven.push(i);
    }
}
console.log(arrayEven);
//     b. заповнити його 50 непарними числами за допомоги циклу.
let arrayOdd = [];
for (let i = 1; i < 51; i++) {
    if (i % 2 !== 0){
        arrayOdd.push(i);
    }
}
console.log(arrayOdd);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let array = [23,44,56,46,66,76,24,56,44,76,86,34,57];
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < array.length; i +=3) {
    const arrayElement = array[i];
    console.log(arrayElement);

}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < array.length; i+= 3) {
    if(array[i] % 2 === 0){
        console.log(array[i]);
    }

}
console.log('**************')
let neighbourArray = [ 1, 2, 3, 5, 7, 9, 56, 8, 67];
let oddArray = [];
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
for (let i = 0; i < neighbourArray.length; i += 3) {
    const item = neighbourArray[i];
    if(item % 2 === 0){
        oddArray.push(item)
    }
}
console.log(oddArray);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < neighbourArray.length; i++) {
    if(neighbourArray[i] % 2 === 0){
        console.log(neighbourArray[i])
        }
}

console.log('***********')
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let countChecks = [100,250,50,168,120,345,188];
let counter = 0;
for (let i = 0; i < countChecks.length; i++) {
    const countCheck = countChecks[i];
    counter += countCheck / countChecks.length;
}
console.log(counter);
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let anyTypeArray = [23,true,'str',456,'string',332,false,7766,'let`s go',445];
let multiplication = [];
for (const item of anyTypeArray) {
    if(typeof item === 'number'|| typeof  item === "boolean"){
    let multiplication1 = item * 5;
    multiplication.push(multiplication1);
    }
}
console.log(multiplication);
// завдання
let numberArray = []
for (const item of anyTypeArray) {
    if (typeof item === 'number'){
        numberArray.push(item);
    }
}
console.log(numberArray);