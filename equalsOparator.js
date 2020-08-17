//JS  == VS ===


// == in JavaScript is used for comparing two variables, but it ignores the datatype of variable. === is used for comparing two variables, but this operator also checks datatype and compares two values.

5 === 5
// true

'hello world' === 'hello world'
// true (Both Strings, equal values)

true === true
// true (Both Booleans, equal values)

77 === '77'
// false (Number v. String)

'cat' === 'dog'
// false (Both are Strings, but have different values)

false === 0
// false (Different type and different value)

false == 0
// true

false == 0
// true

0 == ""
// true

"" == false
// true

//null and undefined

null == null
// true

undefined == undefined
// true

null == undefined
// true

//NaN

NaN == null
// false

NaN == undefined
// false

NaN == NaN
// false


// == abstract equality 
// === strict equality 

console.log(3 == '3'); //true
console.log(3 === '3'); //false

console.log(true == "2");
console.log(true === "2");

console.log("this is a string" == new string ("this is a string"));
console.log("this is a string" === new string ("this is a string"));


//in general === sing is best uses


//revise double equel vs triple equels

const first = 2;
const second = 3;
if(first == second){
    console.log("this is true");
}else{
    console.log("this is false");
}


//only value check


const first = 2;
const second = '2';
if(first == second){
    console.log("this is true");
}else{
    console.log("this is false");
}

//compaire with 1

const first = 2;
const second = true;
if(first === second){
    console.log("this is true");
}else{
    console.log("this is false"); //false
}


const first = 1;
const second = true;
if(first === second){
    console.log("this is true");
}else{
    console.log("this is false"); //true
}


const first = 0;
const second = false;
if(first == second){
    console.log("this is true");
}else{
    console.log("this is false"); //true
}


// not only value check but also type check


const first = 2;
const second = '2';
if(first === second){
    console.log("this is true");
}else{
    console.log("this is false");
}