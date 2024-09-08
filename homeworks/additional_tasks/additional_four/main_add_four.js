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