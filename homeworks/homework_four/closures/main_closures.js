
let user = {
    id: 1,
    name:'Ivan',
    age: 25
}
function userBuilder (id,name,age, status) {
    let user = {id,name,age,status};
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
          if (typeof name === 'string' && name){
              user.name = name;
          }
        },
        setAge(age){
            if (age > 0 && age < 150){
                user.age = age;
            }
        },
        getStatus(){
          return console.log(user.status);
        },
        setStatus(status){
            if(typeof status === 'boolean'){
                user.status = status;
            }

        }
    }
}
let builder = userBuilder(1,'vasia',24,true);
builder.setAge(110);
builder.getAge();
builder.setName('loli Pop');
builder.getName();
builder.getId();
builder.getStatus();
builder.setStatus(false);
builder.getStatus();
let builder2 = userBuilder(2,'Ivan',23,true);
builder2.getName()
builder2.setName('Ivanushka');
builder2.getName()
