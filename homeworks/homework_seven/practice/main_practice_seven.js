class User {
    constructor(id,userName,age,carSaver) {
        this.id = id;
        this.userName = userName;
        this.age = age;
        this.carSaver = [...carSaver];

    }
}

let user1 =new User(1, 'Orest', 24,[] );
User.prototype.addCar = function (name,year) {
    let newCar = {name:name,year:year};
    return this.carSaver.unshift(newCar);
}
console.log(user1);

console.log(user1);
user1.addCar('Lamborgini',2020);
user1.addCar('Porshe',2023);
user1.addCar('BMW',2024);
console.log(user1);
User.prototype.sellCar = function (start,deleted) {
    let garage = this.carSaver;
    return garage.splice(start,deleted);
}

user1.addCar('Supra',2019);
user1.sellCar(3,2);
console.log(user1);

Array.prototype.iter = function (callback) {
    for (const item of this) {
        callback(item)
    }
}
let nums = [1,2,3,4,5,6];
nums.iter((item) => console.log(item));


