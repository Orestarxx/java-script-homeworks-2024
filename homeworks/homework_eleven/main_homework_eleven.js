let urls = new URL('https://dummyjson.com/');
let dummy = {
    carts:'carts',
    recipes:'recipes',
    users:'users'
};
let {users,carts,recipes} = dummy;
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
fetch(`${urls}${carts}`)
    .then(value => value.json())
    .then(carts =>{
        const arrayOfCarts = carts.carts;
        console.log(arrayOfCarts);
        for (const cart of arrayOfCarts) {
            let divCart = document.createElement('div');
            divCart.innerText = `${cart.id}`;
            for (const product of cart.products) {
                console.log(product);
                let imgProduct = document.createElement('img');
                imgProduct.src =`${product.thumbnail}`
                divCart.append(imgProduct)

            }
            document.body.append(divCart);

        }
    })
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.