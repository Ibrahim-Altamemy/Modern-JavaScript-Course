const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-z]{6,12}$/;

//we add eventListener to the form not to the button
form.addEventListener('submit', e => {
  e.preventDefault(); //prevent page from refresh when click submit
  // console.log('form submitted');
  // console.log(username.value);
  const username = form.username.value; //use dot notation to access items in forms (#id)
  const result = pattern.test(username); //return boolean
  if(result){
    feedback.textContent = "user name is valid!"
  }else{
    feedback.textContent = "user name must contains only letters & between 6-12 long";

  }
  
});

// live feedback

form.username.addEventListener('keyup',e =>{
  console.log(e)
  if (pattern.test(e.target.value)) {
    e.target.setAttribute('class','success'); //.setAttribute becz override style
  }else{
    e.target.setAttribute('class','error');
  }
})