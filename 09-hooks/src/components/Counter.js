import React, {useState} from 'react';

// we can write this function as a fat arrow function like this
// but cant default export it

// const Counter = props => {

// }


export default function Counter(props) {
    // the useStatefunction is a hook
    // All hooks (including custom) are prefixed 'use' 
    // useState accepts a value representing the initial state
    // useState returns an array comprising two elements:

    // We are assigning values in the array 
    // counter is the items state (in this case a number called counter)
    // setCounter is a setter function for updating the state

    // just like setState the setter has two implementations
    // 1: accpets a new value, used where the new value IS NOTdependent on the old
    // 2: accepts a function, used where the new value IS dependent on the old
    const [counter, setCounter] = useState(0);
    // const []
    let newNum = 0;

    // We could declare the function here and call it from the jsx
    // But its easier to write it inline with a fat arrow
    // const handleButtonClick = event => setCounter(counter + 1);

        return (
            // the empty tags are a REACT fragmnet
            // saves us from litering the HTML with unnecessary divs
            <>
                <p>Counter: {counter}</p>
                <label>
                    Number:
                    <br/>

                    <input type='number' onChange={newNum + 1} />
                </label>

                <button onClick={() => setCounter(newNum)} className='btn btn-primary'>Increment Counter</button>
            </>
        );
}