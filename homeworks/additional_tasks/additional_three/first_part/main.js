// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let formForGoods = document.forms[0];
let imagesOfGoods = {
    beer:'https://www.rossofinefood.com/5070-large_default/heineken-beer-66-cl.jpg',
    cheeps:'https://fruitveg.com.au/wp2/wp-content/uploads/tasty-cheese-corn-chips-324x324.jpg',
    bread:'https://www.backerhausveit.com/wp-content/uploads/2021/03/17783-1.jpg'
}
 let goods = document.createElement('div');
document.body.append(goods)
formForGoods.addEventListener('submit',(ev) =>{
    ev.preventDefault()
let arrayOfGoods = JSON.parse(localStorage.getItem('goods')) || [];
    let good = {
        nameOfGood:formForGoods[0].value,
        numberOfGood:+formForGoods[1].value,
        priceOfGood:+formForGoods[2].value
    }
    for (const item in imagesOfGoods) {
        if(item === good.nameOfGood){
            good["image"] = imagesOfGoods[item];
            good['id'] = arrayOfGoods.length +1;
        }
    }
    arrayOfGoods.push(good);
 localStorage.setItem('goods',JSON.stringify(arrayOfGoods));
});
let array = JSON.parse(localStorage.getItem('goods'));
console.log(array);
for (const item of array) {
  if(item){
      let good = document.createElement('div');
      good.innerHTML = `
<h2>${item.nameOfGood}</h2>
<p>price:${item.priceOfGood}</p>
<img src=${item.image} alt="image"> `
      goods.append(good);
  }
}