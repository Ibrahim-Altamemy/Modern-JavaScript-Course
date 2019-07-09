//Parent -- > childern -- > sblings

const artcle = document.querySelector('article');

console.log(artcle.children) // HTMLCollection

console.log(Array.from(artcle.children)) //Convert HTMLCollection to Array

const arrayItem = Array.from(artcle.children);

arrayItem.forEach(item =>{
    item.style.color = "green";
})



const h3 = document.querySelector('h3');
console.log(h3.parentElement);
console.log(h3.nextElementSibling);
console.log(h3.previousElementSibling); // return null

