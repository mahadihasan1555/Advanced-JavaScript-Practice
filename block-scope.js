//Scope, block scope, access outer scope variable

function sum(first, second){
    let result = first + second;
    console.log(result);
    return result;
}

const output = sum(3, 4);

console.log(output);


//global scope

let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    if(result> 9){
        const mood = "happay";
        console.log(mood);
    }
    return result;
}

const output = sum(3, 4);
console.log(bonus);
console.log(output);


//thatjsdudu.com
