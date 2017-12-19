//auto generated file w/ JSX
//JSX - Javascript XML //javascript language extenstion
console.log("Konchiwa, App.js is running!");

//challenge
// -> create app object title/subtitle
// -> create a user title/subtitle in the template
// render template

//section 3 lecture 12
// -> if statemetns
// -> ternary operators
// -> logical operators //only render subtitle and p tag if stubtitle exists - logical operators
// -> render new p tage - if options.length > 0 "Here are your options" "No options"

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: ['One' , 'Two']
};


const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne')
 };
 const minusOne = () => {
     console.log('minusOne')
 }
 const reset = () => {
     console.log('reset')
 }
const templateTwo = (
     <div>
         <h1>Count: {count}</h1>
         <button onClick={addOne}>+1</button><br></br>
            <button onClick={minusOne}>-1</button><br></br>
         <button onClick={reset}>reset</button>
     </div>
 );

 //*********************CHALLENGE**************************************
 //MAKE A BUTTON "-1" - SET UP minusOne function and register - log "minusOne"
 //Make reset button "reset" - set up reset function - log "reset"




//or you can write the addOne function within the button attribute - not best practice

// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={() => {
//             console.log('addOne, something here');
//         }}>+1</button>
//     </div>
// );
//prints the object to the console to debug in chrome
//console.log(templateTwo);


// //RENDER A COUNTER; MAKE SURE TO RENDER THE CORRECT TEMPLATE
// let count = 0;
// //set up a javascript expression passing in someId
// const someId = 'myidhere'
// //templateTwo is an object
// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         {/* //with JSX class attribute needs to be named className (error in console)
//             can't use class becuase it's a reserved word in javascript
//             make sure to check the docs - https://reactjs.org/docs/dom-elements.html*/}
//         <button id={someId} className="button">+1</button>
//     </div>
//
// );
// //prints the object to the console to debug
// console.log(templateTwo);


//USED FOR THE BEGINNING OF THE VIDEOS:

// const user = {
//   name: 'Jason',
//   age: 27,
//   location: 'Denver'
// };
//
// function getLocation(location){
//   //return 'Unknown';
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
//
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );


const appRoot = document.getElementById('app');

//MAKE SURE TO RENDER THE CORRECT TEMPLATE
//templateTwo renders to the screen

ReactDOM.render(templateTwo, appRoot);
