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

const user = {
  name: 'Jason',
  age: 27,
  location: 'Denver'
};

function getLocation(location){
  //return 'Unknown';
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);


const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
