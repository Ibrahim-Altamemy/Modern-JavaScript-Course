// What is callback function ?
// callback function is a function that passed as a argument

function myFunc(callback){
    const value = 50;
    callback(value);
  }
  
  myFunc((para)=>{
  console.log(para);
  })
  
  console.log("----time for example-----")
  
  
  // Example
  
  const myfriends = ['rasol','ahmed','mustafa','abduallah'];
  myfriends.forEach((person,index)=>{
    console.log(index,person)
  })
  
  