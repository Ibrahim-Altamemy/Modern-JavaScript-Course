// The parameter (e) is automatically passed from javascript to you function when you add an event listener. It represents the element that was affected, an example would be the button element that was clicked.
//.target function represents the item cliked by mouse p,div,img, ....
const item = document.querySelectorAll('ul li');
const ul = document.querySelector('ul');
console.log(ul);

const btn = document.querySelector('button');

btn.addEventListener('click',() =>{
    const li = document.createElement('li'); //creat li
    li.textContent = "new one"; //add text
    // ul.append(li); add to end
    ul.prepend(li) // add to beginning
})


//add click lisnter to all items in the list
// item.forEach(task =>{
//     task.addEventListener("click",(e) =>{
//         //when click happend exexcute this arrow function
//         // e.target.classList.toggle("mid-line")
//         e.target.remove();
//         console.log(e);
//     })
// })

ul.addEventListener('click',(e) =>{
    if(e.target.tagName == 'LI'){
        e.target.remove();
    }
})


// 12. Event Bubbling (and delegation)
const ParentUL = document.querySelector('.bubble');
ParentUL.addEventListener('click',() =>{
    ParentUL.style.backgroundColor = "green";
})

const Ulist = document.querySelectorAll(".bubble li");
Ulist.forEach(element => {
    element.addEventListener('click',(e) =>{
        element.style.backgroundColor = "green";
        // e.stopPropagation()
    })
});

//In this example notice how when we add eventlistner to the
//li after tiggerd, javascript will also tigger the eventlisnter in 
//the parent
//to stop this behaivor use e.stopPropagation() method