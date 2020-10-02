import React from 'react';
import Books from './components/Books'
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a react component (custom html element)
// It is the apps root component
// all other components eill be rendered within it
export default function App() {
  return (
    <div className="container">
      <h1 className="display-4 mt-4 mb-4">Data Fetcher</h1>
      <hr />
      <Books />
    </div>

  );
}


