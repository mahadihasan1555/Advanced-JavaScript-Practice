//map, filter, find, smart way to run for loop


//map 

const numbers = [12, 42, 23, 53, 52];
const result = numbers.map( x => x * x);
console.log(result);

//filter 

const numbers = [12, 42, 23, 53, 52];
const bigger = numbers.filter( x => x > 12);
console.log(bigger);

const numbers = [12, 42, 23, 53, 52];
const smaller = numbers.filter( x => x < 42);
console.log(smaller);

//reduce

//forEach

//find

const numbers = [12, 42, 23, 53, 52];
const isThere = numbers.find(x => x > 12);
console.log(isThere);