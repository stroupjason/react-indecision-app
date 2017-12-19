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

var appRoot = document.getElementById('app');

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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item one'
            ),
            React.createElement(
                'li',
                null,
                'Item two'
            )
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
