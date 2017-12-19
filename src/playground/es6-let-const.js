var nameVar = 'Jason';
var nameVar = 'Mike';
console.log('nameVar' , nameVar);

//renaming the same variable may overide the first declared variable, you can
//assign and redifine!

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

//let does not let you redifine , but it let's you reassign!

const nameConst = 'Frank';
//const nameConst = 'Gunther'; // throws an error cannot reassign or redifine! ;)
console.log('nameConst' , nameConst);

//rc/playground/es6-let-const.js: Duplicate declaration "nameConst" error in terminal

function getPetName() {
  var petName = 'Hal';
  return petName;
}
const petName = getPetName()
  console.log(petName);

//if you try to access petName directly it's only scoped to the function is why we can't access it, get an error - petName is not defined
//same with let and const, they are function scoped!
//let and const are 'BLOCK LEVEL SCOPED'

//BLOCK SCOPING*****************************************

const fullName = 'Jen Stroup'; //code trying to extract first name
let firstName;

  if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
  }

  console.log(firstName);
