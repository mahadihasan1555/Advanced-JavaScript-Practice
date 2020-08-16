//SCOPE, BLOCK SCOPE, ACCESS OUTER SCOPE VARIABLE

//The scope is a policy that manages the accessibility of variables


//Block scope

if (true) {
    // "if" block scope
    const message = 'Hello';
    console.log(message); // 'Hello'
  }
  console.log(message); // throws ReferenceError


  for (const color of ['green', 'red', 'blue']) {
    // "for" block scope
    const message = 'Hi';
    console.log(color);   // 'green', 'red', 'blue'
    console.log(message); // 'Hi', 'Hi', 'Hi'
  }
  console.log(color);   // throws ReferenceError
  console.log(message); // throws ReferenceError



  //Function scope

  function run() {
    // "run" function scope
    var message = 'Run, Forrest, Run!';
    console.log(message); // 'Run, Forrest, Run!'
  }
  
  run();
  console.log(message); // throws ReferenceError



  function run() {
    // "run" function scope
    const two = 2;
    let count = 0;
    function run2() {}
  
    console.log(two);   // 2
    console.log(count); // 0
    console.log(run2);  // function
  }
  
  run();
  console.log(two);   // throws ReferenceError
  console.log(count); // throws ReferenceError
  console.log(run2);  // throws ReferenceError



  //Module scope

  // "circle" module scope
const pi = 3.14159;

console.log(pi); // 3.14159

// Usage of pi


import './circle';

console.log(pi); // throws ReferenceError