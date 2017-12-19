'use strict';

console.log("works");

// console.log("works, not");
//
//arguments object - no longer bound with arrow functions*******//
var add = function add(a, b) {
  console.log("These are the: " + arguments);
  return a + b;
};
console.log(add(55, 1, 1001)); //returns 56 in the console
//in the past you might of had to explicityly say what is passed in,
//but you also had access to arguments regardless of what's passed in
//the arguments list, this is what allows us to pass more arguments
//outside the function (add a console.log and pass in arguments)
//able to see this as an array in the console

//refactor to es6
// const subtract = (a, b) => {
//   console.log(arguments);
//   return a-b;
// };
// console.log(subtract(55, 1, 1001));
//in this case now this throws an err - arguments is not defined. if you do
//need arguments stick with es5


//**********this keyword - no longer bound***************//


// const user = {
//   name: 'Jason',
//   cities: ['Fort Collins', 'Tokyo', 'Guantanamo Bay'],
//   printPlacesLived: function () {
//     this.cities.forEach(city => {
//       console.log(this.name + ' has live in ' + city);
//     });
//   }
// };
// user.printPlacesLived();

//if we want to use this we switch to es5, but now 10:15min - new sytanx to define
//methods and definitions called method definition sytanx to clean the code up a litte bit


//*************now method definition sytanx***********//
//remove everything before colon to arguments list

const user = {
  name: 'Jason',
  cities: ['Fort Collins', 'Tokyo', 'Guantanamo Bay'],
  printPlacesLived() {
    this.cities.forEach(city => {
      console.log(this.name + ' has live in ' + city);
    });
  }
};
user.printPlacesLived();
//this method has all the same characteritics of the es5 function
//if you want arguments you can type them into the printPlacesLived
//access to your own this binding
