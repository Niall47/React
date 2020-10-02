import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import BeerContainer from './components/BeerContainer';
import NewBeerForm from './components/NewBeerForm';
import BeerList from './components/BeerList'

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



export default function App() {
  const {ul, li} = style;
  return (

    <BrowserRouter>
      <div className="container">
        <h1 className="display-4 mt-4 mb-4">React Router</h1>
        <hr />
        <ul style={ul}>
          <li style={li}><Link to="/">Home</Link></li>
          <li style={li}><Link to="/list">Beer List</Link></li>
          <li style={li}><Link to="/new">Add New Beer</Link></li>
          <li style={li}><Link to="/container">Beer Container</Link></li>
        </ul>
        <Switch>
        <Route exact path="/"><HomePage /></Route>
          <Route path="/list"><BeerList /></Route>
          <Route path="/new"><NewBeerForm /></Route>
          <Route path="/container"><BeerContainer /></Route>
        </Switch>
      </div>
    </BrowserRouter>


    // <div className='container' >
    //   <h1 className='display-4 mt-4 mb-4'> My Beers</h1>
    //   <hr/ >
    //   <BeerContainer />
    //   {/* <NewBeerForm />
    //   <BeerList beers={['fosters', 'stella', 'bud']}/> */}
    // </div>    
  );
}

