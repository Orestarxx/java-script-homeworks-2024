

//завдання з відео
let arrayofItems = [];
let ItemGridsItems = document.querySelectorAll('.item-grid__items');
 let arrayOfChildren = ItemGridsItems[0].children;
console.log(arrayOfChildren);

for (let i = 1; i < arrayOfChildren.length -1; i++) {
    let child = arrayOfChildren[i];
    let title = child.children[0].children[1].children[0].innerText;
    let author = child.children[0].children[1].children[1].innerText;
    let mp3 = child.children[0].children[0].dataset.audioPlayerPreviewUrlValue;
    let object = {
        title:title,
        author: author,
        mp3:mp3,
  }
 arrayofItems.push(object);
}
console.log(arrayofItems);


