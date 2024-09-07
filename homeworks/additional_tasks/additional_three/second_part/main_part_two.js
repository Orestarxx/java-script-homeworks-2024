
let arrOfGoods = JSON.parse(localStorage.getItem('goods'));
let goodsHolder = document.createElement('div');
let buttonClear = document.getElementById('clear');
buttonClear.onclick = function () {
    localStorage.clear()
}
let holder = document.getElementById('holder');
console.log(holder);

if(arrOfGoods){
    for (const item of arrOfGoods) {
        console.log(item);

        let good = document.createElement('div');
        good.innerText = `${item.nameOfGood}`;
        holder.append(good);
        let goodButton = document.createElement('button');
        goodButton.innerText = 'delete';
        document.body.append(goodButton);
        good.append(goodButton);
        goodButton.onclick = function () {
            good.remove();
            arrOfGoods.splice(item,1);
            localStorage.setItem('goods',JSON.stringify(arrOfGoods));
        }
    }
}else{
    console.error('there is no items in this arr')
}



