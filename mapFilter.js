// APPLY MAP, FILTER, FIND ON AN ARRAY OF OBJECTS

//map: returns an array with the same length,

//filter: as the name implies, it returns an array with less items than the original array

//reduce: returns a single value (or object)

//find: returns the first items in an array that satisfies a condition



// map([🌽, 🐮, 🐔], cook)
// => [🍿, 🍔, 🍳]

// filter([🍿, 🍔, 🍳], isVegetarian)
// =>  [🍿, 🍳]

// reduce([🍿, 🍳], eat)
// => 💩


//MAP
//syntex

// var new_array = arr.map(function callback(element, index, array) {
//     // Return value for new_array
// }[, thisArg])

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]


//FILTER

//syntex

// var new_array = arr.filter(function callback(element, index, array) {
//     // Return true or false
// }[, thisArg])

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

//REDUCE

arr.reduce(callback[ initialValue])

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10


//Array Iteration : 8 Methods

//forEach

[1, 2, 4].forEach(function(item, index){
    console.log(item, index);
})

//map

const three = [1, 2, 3];
const doubled = three.map(function(item){
    return item * 2;

});
console.log(doubled);

//filter  

const ints = [1, 2, 3];
const evens = ints.filter(function(item){
    return item % 2 === 0;

});
console.log(evens);

//reduce

const sum = [1, 2, 3].reduce(function(result, item){
    return result + item;
}, 0);

console.log(sum);

//some

const hasNegativeNumbers = [1, 2, -1, 3].some(function( item){
        return item < 0;
    }, 0);
    
    console.log(hasNegativeNumbers); //true

//every


//false
const allPositiveNumbers = [1, 2, -1, 3].every(function( item){
            return item > 0;
        }, 0);
        
 console.log(allPositiveNumbers);

//true
 const allPositiveNumbers = [1, 2, 3].every(function( item){
    return item > 0;
}, 0);

console.log(allPositiveNumbers);


//FIND

const objects = [{id: "a"}, {id: "b"}, {id: "c"}];
const found = objects.find(function(item){
    return item.id === "b";

});
console.log(found); //id: "b"

//FIND INDEX


const objects2 = [{id: "a"}, {id: "b"}, {id: "c"}];
const foundIndex = objects2.findIndex(function(item){
    return item.id === "b";

});
console.log(foundIndex); // 1


