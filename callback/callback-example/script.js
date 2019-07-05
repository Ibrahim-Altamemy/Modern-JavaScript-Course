const ul = document.querySelector(".people");

const things = ['book','coffe','facebook'];


let html =  ``;

things.forEach(para =>{
  html += `<li class="purple">${para}</li>`;
})

ul.innerHTML = html;
