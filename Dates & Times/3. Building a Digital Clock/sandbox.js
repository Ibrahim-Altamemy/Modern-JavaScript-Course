const clock  = document.querySelector(".clock");

const tick = () =>{
    const now = new Date()
    const second = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();

    const html = `
    <span>${hour}</span> : 
    <span>${min}</span> : 
    <span>${second}</span>
    `;

    clock.innerHTML = html
}

setInterval(tick,1000);