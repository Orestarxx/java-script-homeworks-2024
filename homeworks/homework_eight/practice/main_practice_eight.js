function copyObjectFactory(object) {
    let functionsHolder = [];
    if(object){
        for (const key in object) {
            if(typeof object[key] === 'function'){
               const copiedFu = object[key].bind({});
               functionsHolder.push({copiedFu,key});
            }
        }
       const deepCopyObject = JSON.parse(JSON.stringify(object));
        for (const foo of functionsHolder) {
            deepCopyObject[foo.key] = foo.copiedFu;
        }
        return deepCopyObject;
    }
    return 'error';
}
let user = {
    id:1,
    name:'Orest',
    buy(){console.log('buy a house')},
    sell(){console.log('sell the car')},
    eat(){console.log('eat the food')},
    play(){console.log('play a playStation')}
};
const user1 = copyObjectFactory(user)
console.log(user1);
user1.eat()