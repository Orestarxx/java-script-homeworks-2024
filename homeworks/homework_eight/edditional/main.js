let arrayOfClasses = [];
let htmlCollection = document.all;
console.log(htmlCollection);
function collectClasses(collection) {
for (const htmlCollectionElement of collection) {
    if(htmlCollectionElement.classList.value === ''){
        collectClasses(htmlCollectionElement.classList.value);
    }else{
        arrayOfClasses.push(htmlCollectionElement.classList.value);
    }
}
}
collectClasses(htmlCollection);
console.log(arrayOfClasses);
