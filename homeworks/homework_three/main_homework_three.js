// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> hello world</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 1; i < 11; i++) {
    document.write(`<div>${i} Hello world</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 let num = 0;
while (num < 10){
document.write(`<h1>Hello world</h1>`);
num++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let num1 = 1;
while (num1 < 11){
    document.write(`<h1>${num1} Hello world</h1>`);
    num1++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`);
for (const list of listOfItems) {
    document.write(`<li>${list}</li>`);
}
document.write(`</ul>`);

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://ahmadtea.eg/cdn/shop/products/20FGreenTeaPureface1_1000x_ffa22348-d96b-4e5f-92ae-d8106c5cdbcb.webp?v=1666604477&width=1445'
    },
];

document.write(`<div>`);
for (const product of products) {
    document.write(`<h3>${product.title}</h3>`);
    document.write(`<img src="${product.image}" class="product_photo" alt="${product.title}" style="width: 200px; height: 200px;">`);
}
document.write(`</div>`);

// є масив

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// за допомоги циклу вивести:

//     - користувачів зі статусом true
// - користувачів зі статусом false
for (const user of users) {
    if (user.status) {
        console.log(user,'true');
    }else{
    }
}
console.log('**********************')
for (const user of users) {
    if (!user.status) {
        console.log(user,'false');
    }else{
    }
}
// - користувачів які старші за 30 років
console.log('***************')
for (const user of users) {
    if(user.age > 30){
        console.log(user);
    }
}
