/*
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:
  getFirstName()
  getLastName()
  getFullName()
  setFirstName(first)
  setLastName(last)
  setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
*/
var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    // con this diventa accessibile dall'esterno.
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];
  
    this.getFirstName = function() {
      return firstName;
    };
    this.getLastName = function() {
      return lastName;
    };
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
    
    this.setFirstName = function(a) {
      firstName = a;
    }; 
    this.setLastName = function(a) {
      lastName = a;
    }; 
    this.setFullName = function(a) {
        firstName = a.split(" ")[0];
        lastName = a.split(" ")[1];
    };
    return undefined;
    
  };
  
  let bob = new Person('Bob Ross');
  bob.getFullName();