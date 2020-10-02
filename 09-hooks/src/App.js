import React from 'react';
import Counter from './components/Counter';
import DeepState from './components/DeepState';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lifecycyle from './components/lifecycle';

export default function App() {
  return (
    <div className="container">
      <h1 className="display-4 mt-4 mb-4">Hooks</h1>
      <hr />
      <Lifecycyle />
    </div>

  );
}


