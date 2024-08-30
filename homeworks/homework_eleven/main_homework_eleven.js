let urls = new URL('https://dummyjson.com/');
let dummy = {
    carts:'carts',
    recipes:'recipes',
    users:'users'
};
let {users,carts,recipes} = dummy;
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.