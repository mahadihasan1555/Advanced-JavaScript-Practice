//Truthy and Falsy values

//true
const age = 4;
if ( age > 0){
    console.log("condition is true");
}else{
   console.log("condition is false");
}

//false (if value 0 )
const age = 0 ;
if (age){
    console.log("condition is true");
}else{
    console.log("condition is false");
}


//string
const name = "mahadi";

if (name){
    console.log("condition is true");
}else{
    console.log("condition is false");
}

// empty string
const name = "";
if (name){
    console.log("condition is true");
}else{
    console.log("condition is false");
}

const name = " ";
if (name){
    console.log("condition is true");
}else{
    console.log("condition is false");
}

//undefined
let name;
console.log(name);
if (name){
    console.log("condition is true");
}else{
    console.log("condition is false");
}

//null
let name = null;
console.log(name);
if (name){
    console.log("condition is true");
}else{
    console.log("condition is false");
}



//falsy values

// 0
// ""
// undefined
// null
// NaN
//false
//'', "", ``(Empty template string)



//truthy
// "0"
// " "
// {}
// []

// truthy and falsy values

function isTruthy(val){
    if(val){
        console.log(val + ' is Truthy');
    }else{
        console.log(val + ' is falsy');
    }
}
    

// all below are truthy
isTruthy (true)
isTruthy ({})
isTruthy ([])
isTruthy (42)
isTruthy ("0")
isTruthy ("false")
isTruthy (new Date())
isTruthy (-42)
isTruthy (12n)
isTruthy (3.14)
isTruthy (-3.14)
isTruthy (Infinity)
isTruthy (-Infinity)

//all below are falsy
isTruthy(0);
isTruthy("");
isTruthy(false);
isTruthy(NaN);
isTruthy(null);
isTruthy(undefined);