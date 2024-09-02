let url = new URL('https://dummyjson.com/');
let dummy = {
    carts:'carts',
    recipes:'recipes',
    users:'users'
};
let {users,carts,recipes} = dummy;
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch(`${url}${users}`)
    .then(response => response.json())
    .then(({users:arrayOfUsers}) => {
        console.log(arrayOfUsers);
        let usersHolder = document.createElement('div');
        document.body.append(usersHolder)
        for (const user of arrayOfUsers) {
            
        }
    })


//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
