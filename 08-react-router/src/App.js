import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a react component (custom html element)
// It is the apps root component
// all other components eill be rendered within it

const style = {
  ul: {
    listStyleType: 'none',
    paddingLeft: 0
  }
  ,
li: {
  display: 'inline-block',
  padding: '1em',
  border: '1px solid grey'
  }

}

function HomePage() {
  return <p>Home Page</p>;
}

function AboutPage() {
  return <p> About Page</p>

}

function ContactPage() {
  return <p> Contact Page</p>
}

export default function App() {
  const {ul, li} = style;
  return (
    // Your links and linked components must be wrapped in a browser router
    <BrowserRouter>
      <div className="container">
        <h1 className="display-4 mt-4 mb-4">React Router</h1>
        <hr />
        <ul style={ul}>
          <li style={li}><Link to="/">Home</Link></li>
          <li style={li}><Link to="/about">About</Link></li>
          <li style={li}><Link to="/contact">Contact</Link></li>
        </ul>
        <Switch>
          {/* Your linked componets will be redered here 
          only one component will be rendered depending on
          which one has a path matching current address
          Be Aware that react does partial matching by default which means that '/about' matches '/'*/}
          <Route exact path="/"><HomePage /></Route>
          <Route path="/about"><AboutPage /></Route>
          <Route path="/contact"><ContactPage /></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}


