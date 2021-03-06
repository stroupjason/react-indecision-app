'use strict';

//auto generated file w/ JSX
//JSX - Javascript XML //javascript language extenstion
console.log("Konchiwa, App.js is running!");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    //stops fullpage refresh to just handle the event when form is submitted
    e.preventDefault();
    //MAKE SURE FORM WORKS BELOW
    // console.log('form submitted!')
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

//CHALLENGE #2 (see instructions below)
var count = 0;
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};
//GENERATE RANDOM NUMBER, FIND THE OPTION THAT WAS SELECTED AND PRINT TO USER
var onMakeDecision = function onMakeDecision() {
    //genereate random number,
    var randomNum = Math.floor(Math.random() * app.options.length);
    //pull from options array:
    var option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

//example
// const numbers = [2012, 2016, 2017]
//use map to display each in a p tag in an array of JSX

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
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
