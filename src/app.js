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

const appRoot = document.getElementById('app');

const render = () => {
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <button onClick={onRemoveAll}>Remove All</button>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
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
