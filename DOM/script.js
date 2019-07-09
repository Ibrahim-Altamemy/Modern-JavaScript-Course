// The document is an object created by the browser model the html page
console.log(document)


const paras = document.querySelectorAll("p");
console.log(paras); //return NodeList
const paras2 = document.getElementsByTagName("p");
console.log(paras2); // return HTMLCollection

// NodeList VS HTMLCollection (see the image)


paras.forEach(p =>{
    console.log(p.textContent)
})

// Add item in array to html

const titles = ['Learn C#','Learn Python','Learn JS'];

const placeholder = document.querySelector(".titles");

titles.forEach(title =>{
    placeholder.innerHTML += `<p>${title}</p>`;
})


// .setAttribute() class,id,href,style etc..
// .getAttribute() class,id,href etc...

//What is the diff between use .setAttribute('style','color:red') and .style.color = 'red' ?
//.setAttribute overwrite old style, style append to old style


// I put some style in html
// placeholder.style.color = "red"; //red + old style
// placeholder.setAttribute('style','color:green') // will overwrite the style


/* 8. Adding & Removing Classes */
const ps = document.querySelectorAll("div.example > p");

// .classList return list of classes
// .classList.add()
// .classList.remove()
// .classList.toggle('test') will add class test
// .classList.toggle('test') will remove class test

ps.forEach(p=>{
    if(p.textContent.includes('error')){
        p.classList.add("error")
    }else if(p.textContent.includes('success')){
        p.classList.add("success")
    }
})