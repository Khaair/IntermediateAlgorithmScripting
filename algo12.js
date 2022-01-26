// Find the smallest common multiple of the provided parameters 
// that can be evenly divided by both, as well as by all sequential 
// numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily 
// be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of 
// both 1 and 3 that is also evenly divisible by all numbers between 1 
// and 3. The answer here would be 6.

function smallestCommons(arr) {

    // function to calculate gcd (greatest common divisor)
    function gcd(a, b) {
      let d=0;
      while ((a % 2 == 0) && (b % 2 == 0)) {
        a /= 2;
        b /= 2;
        d++;
      }
      while (a != b) {
        if (a % 2 == 0) { a /= 2; }
        else if (b % 2 == 0) { b /= 2; }
        else if (a > b) { a = (a-b)/2; }
        else { b = (b-a)/2; }
      }
      let result=a*Math.pow(2,d);
      return result;
    }
  
    // we will get min value and max, in case array is inverse order
    let max=Math.max(...arr);
    let min=Math.min(...arr);
  
    // create array with all the number from min to max
    let newArr=[];
    for (let i=min; i<=max; i++) {
      newArr.push(i);
    }
  
    // now, we can calculate the smallest common multiple (scm) using
    // formula scm = (a * b)/gcm(a,b);
    // we use reduce, since we can calculte the scm in any order
  
    return newArr.reduce((acum, item) => { 
      acum=(acum*item)/gcd(acum, item);
      return acum;
    });
  }
  
  smallestCommons([1, 5]);
  smallestCommons([5, 1]);
  smallestCommons([2, 10]);
  smallestCommons([1, 13]);
  smallestCommons([23, 18]);