//Undefined most typically means a variable has been declared, but not defined. For example:

let name;
console.log(name); //undefined

let c = undefined;
console.log(c); // undefined

var d = {};
console.log(d.fake); // undefined



//null is an empty or non-existent value.
//null must be assigned.

let a = null;
console.log(a); // null
console.log(typeof(a)); //object



//From the preceding examples, it is clear that undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.

// null === undefined // false
// null == undefined // true
// null === null // true
// and
