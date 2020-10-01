import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter'
import QuoteGenerator from './components/QuoteGenerator';
import DeepState from './components/DeepState';
import AsyncStateMutation from './components/AsyncStateMutation';
import Parent from './components/lifting-state-up/child';

export default function App() {
  return (
    <div className="container">
      <h1 className="display-4 mt-4 mb-4">state-and-lifecycle</h1>
      <Parent />
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


