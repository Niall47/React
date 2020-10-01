import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import BeerContainer from './components/BeerContainer';

export default function App() {
  return (
    <div className='container' >
      <h1 className='display-4 mt-4 mb-4'> My Beers</h1>
      <hr/ >
      <BeerContainer />
      {/* <NewBeerForm />
      <BeerList beers={['fosters', 'stella', 'bud']}/> */}
    </div>    
  );
}

