
   
function binaryAgent(str) {
    let array= str.split(" ");
    for(var i in array){
      var x=parseInt(array[i].toString(),2);
      array[i]=String.fromCharCode(x);
    }
    array=array.join("");
    return array;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  
  