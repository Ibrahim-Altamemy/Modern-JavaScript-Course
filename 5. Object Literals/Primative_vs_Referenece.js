let a = 30;
let b = a

console.log(`a is ${a}   b is ${b}`);

a = 60;

console.log(`a is ${a}   b is ${b}`);
// notice how b don't affect by change a beacuse it copy the value



let obj1 = {value:100};
let obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj1.value = 300;

console.log(obj1);
console.log(obj2);
// notice how change value in obj1 refelct in obj2 beacuse they refer to the same object in the heap memory
