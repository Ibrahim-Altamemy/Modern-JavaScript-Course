const scores = [10,5,60,50,1,9,8]
scores.sort()
console.log(scores);
//sort method takes just first digit and sort array based on this approch.
// 0: 1
// 1: 10
// 2: 5
// 3: 50
// 4: 60
// 5: 8
// 6: 9

const names = ['ibrahim','ali','brhan','rusol']
names.sort()
console.log(names);

//sort method can takes compare function

//write code to sort players from high score to low

const players = [
    {name : 'Ibrahim', score: 60},
    {name : 'Ali', score: 77},
    {name : 'Ahmed', score: 88},
    {name : 'Omar', score: 99}
]

const result = players.sort((a,b) =>{
    if(a.score > b.score){
        return -1
    }else if(b.score > a.score){
        return 1
    }else{
        return 0;
    }
})

// https://www.w3schools.com/js/js_array_sort.asp

//  a = > {name : 'Ibrahim', score: 60}
//  b = > {name : 'Ali', score: 77}
// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.

console.log(result);