import React, { useReducer } from 'react';


export default function ReducerFunctionV2(props) {


    const reducer = (previousState, action) => {
        switch (action.type) {
            case 'increment':
                return {...previousState, counter: previousState.counter + previousState.step};
            case 'decrement':
                return {...previousState, counter: previousState.counter - previousState.step};
            case 'changeStep':
                return {...previousState, step: action.payload};
            default:
                return previousState;
        }
    }
    const initState = {counter: 0, step: 1}

    const [state, dispatch] = useReducer(reducer, initState);
    const {counter, step} = state;
    return (
        <>
        <p>Counter: {counter}</p>
        <IncrementForm step={step} dispatch={dispatch}/>

        </>
    )

}

const IncrementForm = (props) => {
    const {step, dispatch} = props;
    return (
        <>
            <input
            type="number"
            value={step}
            onChange={e => dispatch({type: 'changeStep', payload: e.target.value})}
            placeholder='Increment By' />
            <button onClick={() => dispatch({type: 'increment'})} className='btn btn-primary'>Increment</button>

        </>
    )
}