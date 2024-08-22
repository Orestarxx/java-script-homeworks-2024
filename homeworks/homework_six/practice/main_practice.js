let courses1 = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 2459,
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
        price: 13234,
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
        price: 2345,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 1344,
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
        price: 7677,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 5456,
        rating: 4.53,
        avgResult: 90
    }
];
 let sorted = courses1.sort((index1,index2)=>{
   return  index2.title.length - index1.title.length
});
console.log(sorted);

let sortedByPrice =  courses1.reduce((sortedByPrice,course)=>{
    if(course.price > 2500){
        sortedByPrice.expensive.push(course);
    }else{
        sortedByPrice.chip.push(course);
    }
    return sortedByPrice;

},{expensive:[],chip:[]});
console.log(sortedByPrice);

let arr = [];
for (const key in sortedByPrice) {
   let arrays = sortedByPrice[key];
    for (const object of arrays) {
        arr.push(object);
    }
}
console.log(arr);

 let result = 'name-vasia;age-31;status-true'
     .split(';')
     .map(value=>value.split('-'))
     .reduce((previousValue, currentValue)=>({...previousValue,[currentValue[0]]:currentValue[1]}),{});
console.log(result);

class User {
    constructor(id,name,age,money,garage,fridge) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.money = money;
        this.garage = [...garage];
        this.fridge = [...fridge];
    }
}
User.prototype.pushCar = function (array) {
    for (const item of array) {
        if(item.userId === this.id){
            this.money = this.money - item.price;
            this.garage.push(item)
            item['carId'] = this.garage.length;
        }
    }
}
User.prototype.sellCar = function (start,end) {
    for (const item of this.garage) {
    this.money = item.price + this.money ;
    this.garage.splice(start,end);
    }
    return this.money
}
User.prototype.buyFood = function (array) {
    for (const item of array) {

    }
}

class Car {
    constructor(userId,name,year,price) {
        this.userId = userId;
        this.name = name;
        this.year = year
        this.price = price;
    }
}

let user1 =new User(1,'Orest',24,89000,[],[] );
let user2 =new User(2,'Orest',24,89000,[],[] );
let user3 =new User(3,'Orest',24,89000,[],[] );
let user4 =new User(4,'Orest',24,89000,[],[] );
let user5 =new User(5,'Orest',24,89000,[],[] );

let users = []
users.push(user1,user2,user3,user4,user5);
console.log(users);

let car1 =new Car(1, 'tesla',2014,12000);
let car2 =new Car(2, 'tesla',2014,14000);
let car3 =new Car(3, 'tesla',2014,9000);
let car4 =new Car(4, 'tesla',2014,11000);
let car5 =new Car(5, 'tesla',2014,15000);
let car6 = new Car(2,'TESLA',2020,2000);
let car7 = new Car(2,'ferari',2015,55000);
let car8 = new Car(2,'golf',2023,88000);
let cars = [];
cars.push(car1,car2,car3,car4,car5,car6,car7,car8);

for (const user of users) {
    user.pushCar(cars);
}
console.log(users);
user2.sellCar(0,4);
console.log(users);