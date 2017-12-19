//auto generated file w/ JSX
//JSX - Javascript XML //javascript language extenstion
console.log("Konchiwa, App.js is running!");

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: []
};

const onFormSubmit = (e) => {
    //stops fullpage refresh to just handle the event when form is submitted
    e.preventDefault();
    //MAKE SURE FORM WORKS BELOW
    // console.log('form submitted!')
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

//CHALLENGE #2 (see instructions below)
let count = 0;
const onRemoveAll = () => {
    app.options = [];
    render();
}
//GENERATE RANDOM NUMBER, FIND THE OPTION THAT WAS SELECTED AND PRINT TO USER
const onMakeDecision = () => {
    //genereate random number,
    const randomNum = Math.floor(Math.random() * app.options.length);
    //pull from options array:
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

//example
// const numbers = [2012, 2016, 2017]
//use map to display each in a p tag in an array of JSX

const render = () => {
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
    {/* renders length of the array to the screen: <p>{app.options.length}</p> */}
    <button onClick={onRemoveAll}>Remove All</button>
    {
        //[13, 30 , 66, 'Jason Stroup', null, undefined, true]
        //static arrays of JSX:
        //[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
        //example
        // numbers.map((number) => {
        //     return <p key={number}>Number: {number}</p>;
        // })
    }
    <ol>
     {
         app.options.map((option) => {
             return <li key={option}>{option}</li>;
         })
     }
    </ol>
    {/* ***************************CHALLENGE********************************
        MAP OVER APP.options getting back an array of lis (set key and text) /*}
    {/* no data was added to the url, we're creating single page applications so that
    everything is handled in our client side Javascript */}
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
  </div>
);


ReactDOM.render(template, appRoot);
};

//******************************CHALLENGE 1***************************************
//CREATE RENDER FUNCTION THAT RENDERS THE NEW JSX
// CALL IT RIGHT AWAY
// CALL IT RIGHT AFTER OPTIONS ARRAY ADDED TO

render();


//*******************************CHALLENGE 2 ************************************
//CREATE A REMOVE ALL BUTTON WITH TETXT OF "REMOVE ALL"
//ON CLICK HANDLER - WIPE OUT YOUR OPTIONS - COUNT SHOULD GO BACK TO ZERO AS WELL
// ON CLICK -> WIPE THE ARRAY -> RENDER

//RECAP
//1. COVERED THE FACT THAT ARRAYS ARE SUPPORTED BY JSX
//2. WE CAN ALSO HAVE AN ARRAY OF JSX INSIDE OF JSX, ALLOWS US TO RENDER DYNAMIC ELEMENTS, BASED OFF OF ARRAYS' LENGTH
//3. REFACTOR THE RETURN STATEMENT ABOVE INTO ONE LINE (CAN ONLY DO SO WHEN RETURNING ONE ARGUMENT)

//RECAP FOR PICKING AN OPTION VIDEO 20:
//1. fundamentals of jsx
//2. build out a little applications
//3. inject values, add conditional rendering, set up event handlers(form submits, button clicks), and generate dynamic set of
//elements based off of application data, re-render and render the app keeping up  the UI up-to-date with the app fundamentals

//up next, react components
