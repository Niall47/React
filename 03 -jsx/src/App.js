import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const name = 'Niall James';
const greeting = () => 'Hello';
const hobbies = ['Reading', 'Walking', 'Eating'];
const paragraph = <p>Aussie Rules is a pretty good game</p>

// This is a react component (custom html element)
// It is the apps root component
// all other components will be rendered within it

// a component is a class/function that renders or returns JSX
// a component is a custom HTML element
export default function App() {

  // JSX is js XML
  // it looks like HTML but compiles into JS
  // it is syntatic sugar for React.createElement()
  // these two lines are equivilent
  // const heading1 = React.createElement('h1', null, null, 'My Heading');
  // const heading2 = <h1>My Heading</h1>;

  // JSX Element attributes must be camelCase
  // onclick is wrong; onClick is right
  // HTML attributes that are JS reserverd words are not allowed. e.g. class

  // you can embed expressions in JSX using the braces {}
  // e.g. <p>Hello {name}</p>
  // you cannot embed if statments or loops inside JSX only expressions
  // attributes must be surrounded by either quotation marks or braces but no both


  // you can render/return only ONE JSX element
  return (
    <div className="container">
      <h1 className="display-4 mt-4 mb-4">JSX</h1>
      <hr />
        <p>{greeting()}, my name is {name}</p>
        {paragraph}

        <p className="mt-4 mb-4">Hobbies include:</p>
        <ul>
          {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
        </ul>
    </div>

  );
}


