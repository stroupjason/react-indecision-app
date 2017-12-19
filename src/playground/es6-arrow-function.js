function square(x) {
  return x * x;
};
console.log(square(3)); // return 9 in the console
//refactor

// const squareArrow = (x) => {
//   return x * x;
// }

console.log(square(8)); //64 should print in chrome dev tools

//arrow es 6 functions are ALWAYS ANONYMOUS!!!!  WITH ES5  you can define your function
//i.e 1st line, callback function in the console.log("sqaure")

//arrow function expression sytanx (more concise functions)

const sqaureArrow = (x) => x * x; //this only works if there's only 1 argument
//return is implicitly returned
  console.log(sqaureArrow(4)); //logs 16 in the console
//if you have to wait on promises or other function calls, this is not ideal

//andrew thinks that it will take about 2 weeks to get used to writing es6!

// Challenge - Use Arrow functions/
//getFirstName('Mike Smith') -> 'Mike' from last challenge
//Create reg arrow function
// Create an arrow function using the shorthand syntax

const fullName = 'Jen Stroup'; //code trying to extract first name
// let firstName;
//
//   if (fullName) {
//     firstName = fullName.split(' ')[0];
//     console.log(firstName);
//   }

  // const getFirstName = (fullName) => {
  //   return fullName.split(' ')[0];
  // }
  // console.log(getFirstName('Jen Stroup'));

  const getFirstName = (fullName) => fullName.split(' ')[0];
    console.log(getFirstName('Jen Stroup'));
