 let arr = [123,4,5,6,7,8,[3,4,5,6,3],3,7,[123,[244,345,[156,456,789,[1544,1]]]]];
function iterator (array,i){
     console.log(array[i]);
     i++;
     if(i < array.length){
         iterator(array,i)
     }
 }
 iterator(arr,0);

 let newArr = [];

function flatter (array){
    for (const item of array) {
        if(Array.isArray(item)){
            flatter(item)
        }else{
            newArr.push(item)
        }
    }
 }
flatter(arr);
 console.log(newArr);