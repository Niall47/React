import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import BeerList from './components/BeerList';
import NewBeerForm from './components/NewBeerForm';

export default function App() {
  return (
    <div className='container' >
      <h1 className='display-4 mt-4 mb-4'> My Beers</h1>
      <hr/ >
      <NewBeerForm />
      <BeerList beers={['fosters', 'stella', 'bud']}/>
    </div>    
  );
}

