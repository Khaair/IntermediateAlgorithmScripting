//My way

function orbitalPeriod(...arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    var numbers = arr[0];
    for(var i in numbers){
      if(numbers[i].hasOwnProperty('name') && numbers[i].hasOwnProperty('avgAlt')){
        var orbitalPeriod=Math.round(2*Math.PI*(Math.sqrt(Math.pow(numbers[i]['avgAlt']       +earthRadius,3)/GM)));
        delete numbers[i]['avgAlt'];
        numbers[i]['orbitalPeriod']=orbitalPeriod;
      }
    }
    
    console.log(orbitalPeriod);
    return numbers;
  }
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
  
  //Solution https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris/