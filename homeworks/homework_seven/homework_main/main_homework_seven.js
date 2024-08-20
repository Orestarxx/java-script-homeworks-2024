
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let array = [];
let user1 = new User(1,'Orest','Gans','oresto322@gmail.com','0964112541');
let user2 = new User(2,'Petro','Gans','oresto322@gmail.com','0964112541');
let user3 = new User(3,'Ivan','Gans','oresto322@gmail.com','0964112541');
let user4 = new User(4,'Dima','Gans','oresto322@gmail.com','0964112541');
let user5 = new User(5,'Oleg','Gans','oresto322@gmail.com','0964112541');
let user6 = new User(6,'Devid','Gans','oresto322@gmail.com','0964112541');
let user7 = new User(7,'Roman','Gans','oresto322@gmail.com','0964112541');
let user8 = new User(8,'Marta','Gans','oresto322@gmail.com','0964112541');
let user9 = new User(9,'Rostislav','Gans','oresto322@gmail.com','0964112541');
let user10 = new User(10,'Panas','Gans','oresto322@gmail.com','0964112541');
array.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
console.log(array);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(array.filter(item => item.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(array.sort((item1, item2) => item2.id - item1.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User{
    constructor(id,name,surname,email,phone,order) {
        super(id,name,surname,email,phone);
        this.order = [...order];
    }
}
 let clientsArray = [];
let client1 =new Client(1, 'orest', 'Hans', 'oresto322@gmail.com', '0964542531', ['bread', 'gun', 'cheese', 'phone', 'TV', 'pen', 'laptop','playstation','cup']);
let client2 =new Client(2, 'orest', 'Hans', 'oresto322@gmail.com', '0964542531', [ 'cheese', 'phone', 'TV', 'pen', 'laptop','playstation','cup']);
let client3 =new Client(3, 'orest', 'Hans', 'oresto322@gmail.com', '0964542531', ['bread', 'gun', 'cheese', 'phone', 'TV', 'pen', 'laptop','playstation']);
let client4 =new Client(4, 'orest', 'Hans', 'oresto322@gmail.com', '0964542531', ['bread', 'gun', 'cheese', 'phone', 'TV', 'pen', ]);
let client5 =new Client(5, 'orest', 'Hans', 'oresto322@gmail.com', '0964542531', ['bread', 'gun', 'cheese', 'phone', ]);
let client6 =new Client(6, 'orest', 'Hans', 'oresto322@gmail.com', '0964542531', [ 'phone', 'TV', 'pen', 'laptop','playstation','cup']);
let client7 =new Client(7, 'orest', 'Hans', 'oresto322@gmail.com', '0964542531', ['bread', 'gun', 'cheese']);
let client8 =new Client(8, 'orest', 'Hans', 'oresto322@gmail.com', '0964542531', ['bread']);
let client9 =new Client(9, 'orest', 'Hans', 'oresto322@gmail.com', '0964542531', ['bread', 'gun', 'cheese', 'phone', 'TV', 'pen', 'laptop',]);
let client10 =new Client(10, 'orest', 'Hans', 'oresto322@gmail.com', '0964542531', ['playstation','cup']);
clientsArray.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
console.log(clientsArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clientsArray.sort((clientList1, clientList2) => clientList1.order.length - clientList2.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 function Car (model,creator,year,maxSpeed,engineDisplacement) {
     this.model = model;
     this.creator = creator;
     this.year = year;
     this.maxSpeed = maxSpeed;
     this.engineDisplacement = engineDisplacement;
 }
 Car.prototype.increaseMaxSpeed = function (newSpeed) {this.maxSpeed = newSpeed;}
 Car.prototype.drive = function () {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
 Car.prototype.changeYear = function (newYear) { this.year = newYear};
 Car.prototype.addDriver = function (id,name,age) {this.driver = {id,name,age}};
 let car1 = new Car('tesla', 'Ilon Mask', 2015, 360, 0);
car1.increaseMaxSpeed(270);
car1.changeYear(2020);
car1.drive()
console.log(car1);
car1.addDriver(1,'Io',21);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarConstructor {
    constructor(model,creator,year,maxSpeed,engineDisplacement) {
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineDisplacement = engineDisplacement;
    }
}
CarConstructor.prototype.increaseMaxSpeed = function (newSpeed) {this.maxSpeed = newSpeed;}
CarConstructor.prototype.drive = function () {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)};
CarConstructor.prototype.changeYear = function (newYear) { this.year = newYear};
CarConstructor.prototype.addDriver = function (id,name,age) {this.driver = {id,name,age}};
let carConst1 = new CarConstructor('X','Mask',2014,400,0);
carConst1.increaseMaxSpeed(270);
carConst1.changeYear(2020);
carConst1.drive()
console.log(carConst1);
carConst1.addDriver(1,'Ioan',27);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Girl {
    constructor(name,age,legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}
class Prince {
    constructor(name,age,foundShoe) {
        this.name = name;
        this.age  = age;
        this.foundShoe = foundShoe;
    }
}
let prince = new Prince('Richard',25,36);

 let girl1 = new Girl('Popelushka',23,36);
 let girl2 = new Girl('Marta',22,43);
 let girl3 = new Girl('Ira',25,37.5);
 let girl4 = new Girl('Katia',18,39);
 let girl5 = new Girl('Ania',27,45);
 let girl6 = new Girl('Solomia',24,42);
 let girl7 = new Girl('Suzanna',23,37);
 let girl8 = new Girl('Ivanka',28,36.5);
 let girl9 = new Girl('Ilona',29,41);
 let girl10 = new Girl('Julia',26,38);
let girls = [];
girls.push(girl1,girl2,girl3,girl4,girl5,girl6,girl7,girl8,girl9,girl10);
console.log(girls.filter(girl => girl.legSize === prince.foundShoe));
console.log(girls.find(girl => girl.name === 'Popelushka'));

// *Через Array.prototype. створити власний foreach, filter
 Array.prototype.iterator = function (callBack) {
     const array = this;
     for (const item of array) {
         callBack(item)
     }
 }
 girls.iterator((item) => console.log(item));

 Array.prototype.finder = function (value) {
     let generatedArray  = [];
     let ourArray = this;
     for (const item of ourArray) {
         if(value(item)){
             generatedArray.push(item)
         }
     }
     return generatedArray;
 }
console.log(girls.finder((girl) => girl.legSize === prince.foundShoe));