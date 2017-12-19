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
    //count = count+1;
    count++;
    renderCounterApp();
    //this count changes the count number in the console.log but not the Count 0.
    //JSX does not have data-binding
 };
 const minusOne = () => {
     count--;
     renderCounterApp();
 }
 const reset = () => {
     count = 0;
     renderCounterApp();
 }

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
         <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
         </div>
     );

     //react is uses virtual dom algorithms in javascript to determine the minimal number of changes to
     //that need to be made in order to correctly render the application
     ReactDOM.render(templateTwo, appRoot);

};
//creating a function and calling it in a few seperate places, able to create a JSX app with
//real time binding
//this is essentially the start of react, we're going to write components to do so (scalable)

renderCounterApp();
