// https://date-fns.org/
// Modern JavaScript date utility library

const now = new Date();

console.log(now);
console.log(dateFns.isToday(new Date()));


//https://date-fns.org/v1.30.1/docs/format
console.log(dateFns.format(now,'dddd MM-MMMM YYYY'));

// compare dates
console.log(dateFns.distanceInWords(now, new Date('7 20 2019'),{addSuffix: true}));