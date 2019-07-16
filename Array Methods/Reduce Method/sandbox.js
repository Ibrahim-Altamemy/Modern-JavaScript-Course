//reduce method can return single value or array etc...

//write code to find numbers large than 50
const scores = [10,50,90,20,60,88];


//acc = acculamtor
// 0 init acc var
let result = scores.reduce((acc,curr) =>{
    if (curr > 50) {
        acc ++;
    }
    return acc
},0)
console.log(result);


//write code to calc total scores of each palyer

const player = [
    {name:"ibrahim", score: 40},
    {name:"ali", score: 40},
    {name:"ibrahim", score: 40},
    {name:"ahmed", score: 40},
    {name:"ibrahim", score: 40},
    {name:"ali", score: 40}
]

let ibrahimScore = player.reduce((acc,curr) =>{
    if(curr.name === "ibrahim"){
        acc += curr.score
    }
    return acc //evey iterate will return value till reah end of array
},0)

console.log(ibrahimScore);