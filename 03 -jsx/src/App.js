import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeagueTable from './LeagueTable.js'

const myArray = ['word1', 'word2'];

// const jsx = null;
// if (myArray) {
//   jsx = myArray.map(el => <p>{el}</p>)

// }
export default function App() {

  return (
    <div className='container'>
        <LeagueTable />


      {/* We need to ensure the array has a value so we use the inline if statement to decide */}
      {/* Boolenas or null will render nothing */}
      {/* {myArray.map(el => <p>{el}</p>)} */}

      {/* render myArray if it exists or render nothing */}
      {myArray ? myArray.map(el => <p>{el}</p>) : null}


      {/* if the thing on the left is true the thing on the right is returned */}
      {myArray && myArray.map(el => <p>{el}</p>)}

      {/* if the thing on the left is false the thing on the right it returned */}
      {myArray || <p>myArrayisEmpty</p>}
  </div>

  );
}


