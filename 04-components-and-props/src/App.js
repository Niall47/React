import React from 'react';
import ReactDOM from 'react-dom'
import MyFunctionCompnent from './components/myFunctionComponent';
import MyClassComponent from './components/myClassComponent';
import ChangingPropFunctionComponent from './components/ChangingPropFunctionComponent';

// This is a react component (custom html element)
// It is the apps root component
// all other components will be rendered within it

// a component is a class or a function that renders/returns JSX
// it must be named using TitleCase
// a component may be passed props (custom HTML attributes)

// A prop is data that is input into a component by its parent component
// props are the mechanisem by which data is passed down the tree (DOM)
// Props cannot be modified by the component they are passed to
// Props can be modified by the parent

// A changing prop triggers a rerender of the component recieving the prop

export default function App() {
  return (
    <div className="container">
      <h1 className="display-4 mt-4 mb-4">React App Template</h1>
      <hr />
      
      <MyFunctionCompnent number="42"/>
      <MyClassComponent words={['dsfs', 'dsfsfs']}/>
      <div id="changingPropsDiv">

      </div>
      {/* <ChangingPropFunctionComponent /> */}
    </div>

  );
}

const p1 = 'Descartes'
const q1 = "I am"
const p2 = 'Danton'
const q2 = "Eat shit"


setTimeout(() => {
  ReactDOM.render(<ChangingPropFunctionComponent person={p1} quote={q1}/>, document.querySelector('#changingPropsDiv'));
}, 3000);

setTimeout(() => {
  ReactDOM.render(<ChangingPropFunctionComponent person={p2} quote={q2}/>, document.querySelector('#changingPropsDiv'));
}, 9000);