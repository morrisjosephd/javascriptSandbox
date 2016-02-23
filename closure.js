var makeCounter = function gateKeeper () {
  var number = 0;

  function changeNumber(val) {
    return number += val;
  }

  return {
    increment: function() {
      changeNumber(1);
    },
    decrement: function() {
      changeNumber(-1);
    },
    getNumber: function() {
      return number;
    }
  };
};

var counter1 = makeCounter();
var counter2 = makeCounter();



console.log(counter1.getNumber());
counter1.increment();
counter1.increment();
console.log("Counter 1 value " + counter1.getNumber());
console.log("Counter 2 value " + counter2.getNumber());
