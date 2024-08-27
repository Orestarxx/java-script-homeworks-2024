

//завдання з відео
let arrayOfItems = [];
let itemGridsItems = document.querySelectorAll('.item-grid__items');
 let arrayOfChildren = itemGridsItems[0].children;

for (let i = 1; i < arrayOfChildren.length -1; i++) {
    let child = arrayOfChildren[i];
    let object = {
        title: child.children[0].children[1].children[0].innerText,
        author: child.children[0].children[1].children[1].innerText,
        mp3:child.children[0].children[0].dataset.audioPlayerPreviewUrlValue
  };
 arrayOfItems.push(object);
}
console.log(arrayOfItems);

