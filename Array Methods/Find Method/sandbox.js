// find method return first value encouter that pass certain condation
//return either true / false

const scores = [30,60,80,20,10]

const result = scores.find((score) =>{
    return score > 60
});

console.log(result);