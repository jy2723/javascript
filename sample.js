// Function hoisting
function greet() {
    console.log('Hello, world!');
  }
  
  greet(); // This will print "Hello, world!" even though the function is declared after it is called.
  
  // Variable hoisting
  console.log(name); // This will print "undefined" because the variable is not initialized yet.
  var name = 'John Doe';