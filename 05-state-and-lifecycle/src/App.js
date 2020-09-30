import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter'
import QuoteGenerator from './components/QuoteGenerator';
import DeepState from './components/DeepState';
import AsyncStateMutation from './components/AsyncStateMutation';

// This is a react component (custom html element)
// It is the apps root component
// all other components eill be rendered within it
export default function App() {
  return (
    <div className="container">
      <h1 className="display-4 mt-4 mb-4">state-and-lifecycle</h1>
      <hr />
      <Counter />
      <hr />
      <QuoteGenerator />
      <hr />
      <DeepState />
      <hr />
      <AsyncStateMutation />
    </div>

  );
}


