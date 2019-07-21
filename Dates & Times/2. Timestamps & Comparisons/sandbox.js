const now = new Date() // current time
const before = new Date('Sat Jul 20 2018') // at specific time


console.log(now.getTime()); //time in ms
const diff = now.getTime() - before.getTime() // get the diffrent between two times

const mins = Math.round(diff / 1000 / 60) // ms => s => ms
const hours = Math.round(mins / 60) 
const days = Math.round(hours / 24) 

console.log(`this blog was written since ${days} ago`);


// Convert timestamp to Date object
const timestamp = 1563629462314;
console.log(new Date(timestamp));