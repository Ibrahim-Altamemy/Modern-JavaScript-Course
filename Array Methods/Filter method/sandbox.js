const scores = [10,20,40,50,30,70];

const successStudent = scores.filter((score) =>{
    //your code must return either true or false
    //true == keep it in new array
    //flase == get rid of it
    return score >= 50;
})

console.log(successStudent)

const user = [
    {name:'ibrahim', premium : true},
    {name:'ahmed', premium : false},
    {name:'Omar', premium : true},
    {name:'Bakar', premium : false}
]

const premiumUser = user.filter((user) =>{
    return user.premium
});

console.log(premiumUser)