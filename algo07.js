function destroyer(arr) {
    // Remove all the values
    var args = Array.prototype.slice.call(arguments);
    args.splice(0, 1);
    return arr.filter(function(arg) {
        return args.indexOf(arg) < 0;
      });
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);