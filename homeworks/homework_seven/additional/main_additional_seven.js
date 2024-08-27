
function UserCards (card){
    if(card === 1){
       return{
           balance: 100,
           transactionLimit:100,
           historyLogs:[],
           key:1,
           putCredits(addMoney){
               if(typeof this.balance === 'number'){
               this.balance = this.balance + addMoney;
               this.historyLogs.push({credits: addMoney, operationType:'moneyAdd',time:Date()});
               }else {
                   throw new Error('it`s not the number type,please write the correct one');
               }
           },
           takeCredits(takeMoney){
               if(typeof this.balance === 'number'){
                    this.balance = this.balance - takeMoney;
                    this.historyLogs.push({credits: takeMoney,operationType:'moneyTaken' ,time:Date().toString()});
               }else {
                   throw new Error('it`s not the number type,please write the correct one');
               }
           }
       }
    }
}
let user = new UserCards(1);
user.putCredits(500);
console.log(user);
user.takeCredits(200);
console.log(user);
user.putCredits(5600);
user.takeCredits(3000);
console.log(user);
