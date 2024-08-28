//
// function UserCards (card){
//        let object = {
//            balance: 100,
//            transactionLimit:3000,
//            historyLogs:[],
//            key:1,
//            getOptions(){
//                console.log(this);
//            },
//            putCredits(addMoney){
//                if(typeof this.balance === 'number'){
//                    this.balance = this.balance + addMoney;
//                    this.historyLogs.push({credits: addMoney, operationType:'moneyAdd',time:Date()});
//                }else {
//                    throw new Error('it`s not the number type,please write the correct one');
//                }
//            },
//            takeCredits(takeMoney){
//                if(typeof this.balance === 'number'){
//                    if(takeMoney <= this.transactionLimit && takeMoney >= 0){
//                        this.balance = this.balance - takeMoney;
//                        this.historyLogs.push({credits: takeMoney,operationType:'moneyTaken' ,time:Date().toString()});
//                    }else if(takeMoney <= 0){
//                        throw new Error('can`t be 0 or less!');
//                    }else{
//                        throw new  Error(`card Limit, you cant take more money then ${this.transactionLimit} !`);
//                    }
//                }else {
//                    throw new Error('it`s not the number type,please write the correct one');
//                }
//            },
//            setTransactionLimit(newLimit){
//                if(this.transactionLimit >= 0){
//                    this.transactionLimit = newLimit;
//                }else{
//                    throw new Error('can`t set less then 0');
//                }
//            },
//            transferCredits(transferCardAmount,key){
//                if(key === 2){
//                    this.balance =
//                }
//            }
//        };
//     if(card => 1 && card <= 3){
//         if(card === 1){
//             return obj;
//        }else if(card === 2){
//            return {...object,
//                key:2,
//                balance: 300,
//            }
//        }else if(card === 3){
//           return {...object, key:3, balance: 600}
//        }
//     }
// }
// let user = new UserCards(3);
// user.putCredits(500);
// user.takeCredits(200);
// user.putCredits(5600);
// user.takeCredits(3000);
// user.putCredits(2000);
// user.takeCredits(3000);
// user.setTransactionLimit(1000);
// user.takeCredits(100);
// user.getOptions()
//
// let obj ={
//     balance: 100,
//     transactionLimit:3000,
//     historyLogs:[],
//     key:1,
//     getOptions(){
//         console.log(this);
//     },
//     putCredits(addMoney){
//         if(typeof this.balance === 'number'){
//             this.balance = this.balance + addMoney;
//             this.historyLogs.push({credits: addMoney, operationType:'moneyAdd',time:Date()});
//         }else {
//             throw new Error('it`s not the number type,please write the correct one');
//         }
//     },
//     takeCredits(takeMoney){
//         if(typeof this.balance === 'number'){
//             if(takeMoney <= this.transactionLimit && takeMoney >= 0){
//                 this.balance = this.balance - takeMoney;
//                 this.historyLogs.push({credits: takeMoney,operationType:'moneyTaken' ,time:Date().toString()});
//             }else if(takeMoney <= 0){
//                 throw new Error('can`t be 0 or less!');
//             }else{
//                 throw new  Error(`card Limit, you cant take more money then ${this.transactionLimit} !`);
//             }
//         }else {
//             throw new Error('it`s not the number type,please write the correct one');
//         }
//     },
//     setTransactionLimit(newLimit){
//         if(this.transactionLimit >= 0){
//             this.transactionLimit = newLimit;
//         }else{
//             throw new Error('can`t set less then 0');
//         }
//     }
// }