
function CreditCards(key) {
    let card = {
        balance:100,
        transactionLimit:5000,
        historyLogs:[],
        key:key
    }
    return {
        putCredits(addMoney){
            card.balance = card.balance + addMoney;
            const date = new Date();
            card.historyLogs.push({operationType:'put credits',credits:addMoney,operationTime:date.toLocaleString()});
        },
        takeCredits(takeMoney){
            if(takeMoney > card.transactionLimit && takeMoney > card.balance){
                console.error('there is limit for it');
            }else{
            card.balance = card.balance - takeMoney;
                const date = new Date();
            card.historyLogs.push({operationType:'take credits',credits:takeMoney,operationTime:date.toLocaleString()});
            }
        },
        setTransactionLimit(newLimit){
          if(card.transactionLimit  < 0){
              console.error('can`t put the limit less then 0');
          }else{
              card.transactionLimit = newLimit;
          }
        },
        transferCredits(amount,cardTaker){
               let tax = amount / 100 * 0.5
           if(amount < card.balance + tax ){
               this.takeCredits(amount - tax);
               cardTaker.putCredits(amount);
           }else{
               console.error('no money for transfer');
           }
        },
        getCardOptions(){
            return JSON.parse(JSON.stringify(card));
        }
    }
}
let card1 =  new CreditCards(1);
let card2 = new CreditCards(2);
let card3 = new CreditCards(3);
card1.putCredits(4000);
card1.transferCredits(3000,card3);
console.log(card1);
card1.putCredits(20000);
console.log(card1.getCardOptions());
function UserAccount(name) {
     let user = {
         name:name,
         cards:[]
     }
     return {
       addCard(card){
           user.cards.push(card.getCardOptions());
       },
       getUser(){
         return JSON.parse(JSON.stringify(user));
       },
       getCardByKey(key){
           for (const card of user.cards) {
               if(key === card.key){
                 return JSON.parse(JSON.stringify(card));
               }
           }
       }
     }
 }
 let user = new UserAccount('Bob');
user.addCard(card1);
user.addCard(card2);
user.addCard(card3);
console.log(user.getUser());
let card11 = user.getCardByKey(3);
console.log(card11);
card2.putCredits(3000);

