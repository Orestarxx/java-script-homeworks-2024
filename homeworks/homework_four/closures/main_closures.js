
let user = {
    id: 1,
    name:'Ivan',
    age: 25
}
function userBuilder (id,name,age) {
    let user = {id,name,age};
    return{
        getId(){
           return console.log(user.id);
        },
        getName(){
            return console.log(user.name);
        },
        getAge(){
            return console.log(user.age);
        },
        setName(name){
          if (name){
              user.name = name;
          }
        },
        setAge(age){
            if (age > 0 && age < 150){
                user.age = age;
            }
        },
    }
}
let builder = userBuilder(1,'vasia',24);
builder.setAge(151);
builder.getAge()
builder.setName('loli Pop');
builder.getName()
