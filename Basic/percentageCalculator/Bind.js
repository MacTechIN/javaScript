
//Alex Brow's 
this.car = "Honda Civic w/ Ugly spolier";


var marksGarage ={
  car: "Aston Martin",
  getCar: function() {
  return this.car;  
  }
};
  
console.log(marksGarage.getCar());



var storeGetCarForLater = marksGarage.getCar; 

//now work is over and Mark wants his car 

console.log(storeGetCarForLater); //WTF 

var theRealGetCarFunction = storeGetCarForLater.bind(marksGarage);

console.log(theRealGetCarFunction());