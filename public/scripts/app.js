'use strict';

//auto generated file w/ JSX
//JSX - Javascript XML //javascript language extenstion
console.log("Konchiwa, App.js is running!");

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: ['One', 'Two']
};

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
  )
);

var count = 0;
var addOne = function addOne() {
  //count = count+1;
  count++;
  renderCounterApp();
  //this count changes the count number in the console.log but not the Count 0.
  //JSX does not have data-binding
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  //react is uses virtual dom algorithms in javascript to determine the minimal number of changes to
  //that need to be made in order to correctly render the application
  ReactDOM.render(templateTwo, appRoot);
};
//creating a function and calling it in a few seperate places, able to create a JSX app with
//real time binding
//this is essentially the start of react, we're going to write components to do so (scalable)

renderCounterApp();
