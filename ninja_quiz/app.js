const correct = ['B','A','A'];
const form = document.querySelector('.form-quiz');
const result = document.querySelector('.result');


form.addEventListener('submit', e =>{
    e.preventDefault();
    const UserAns = [form.q1.value,form.q2.value,form.q3.value];
    //form.q1 return list of all radio with the name q1
    //form.q1.value return the value of checked radio 
    let count = 0;
    UserAns.forEach((value,index) =>{
        if(correct[index] === value){
            count += 25;
        }
    })
    // show the result
    const span = result.querySelector('span');
    result.classList.remove('d-none');
    scrollTo(0,0);

    let output = 0;
    let timer = setInterval(() =>{
        // this code will fires evey 10ms
        span.textContent = `${output}%`
        if(output === count){
            clearInterval(timer)
        }else{
            output ++;
        }
    }
    ,10)
    
})

// window object is global object in fronend javascript, mother of all object
// window.consloe.log
// window.document.querySelector()
// window.scrollTo


//setTimeout(callback,time) VS setInterval(callback,time)
//setTimeout(callback,time) fires after time
//setInterval(callback,time) fires evey time

// setInterval(() =>{
//     console.log("Hello")}
// ,3000);

//How to stop Interval ?
clearInterval()



