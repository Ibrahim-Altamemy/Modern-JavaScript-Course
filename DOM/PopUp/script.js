const btnShowMe = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

console.log(popup)
btnShowMe.addEventListener('click',() =>{
    popup.style.display = 'block';
    
});

close.addEventListener('click',() =>{
    popup.style.display = 'none';
    
});