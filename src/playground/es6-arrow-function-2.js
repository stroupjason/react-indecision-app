console.log("works, not");

// console.log("works, not");
//
//arguments object - no longer bound with arrow functions*******//
var add = function add(a, b) {
  console.log(arguments);
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

//now use map method, like for Each gets called one time for every item in the array
//diff is that forEach lets you do something like print. with map it allows you to transform

//map method
