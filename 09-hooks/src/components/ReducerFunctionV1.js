import React, { useReducer } from 'react';

// state management on a large scale is hard
// your app is likely to have a lot of state;
//  -UI state, e.g. themes, language, sort & filter options
// - user state, e.g. current user. authorisation
// - server data. e.g. data that you've fetched from an API
// Much of this state will be managed by container/stateful/fat components
// changes to state are often affected by various components not only container components
// app state tends to be distributed widely across the app and that creates a maintenence challenge
// it is particularly difficult when many disparate components are interested in the same data
// the purpose of tools like useReducer and Redux is to centralise state managment
// and to enable many components to effect changes on the app state
export default function ReducerFunctionV1(props) {

    // the reducer is responsible for transforming the state
    // it must return a new version of the state
    // the reducer accepts two arguments
    // 1. the previous state
    // 2. an action object
    // action objects typically have two props: type and a payload
    const reducer = (previousState, action) => {
        console.log('reducer called')
        console.log(previousState)
        console.log(action)
        switch (action.type) {
            case 'increment':
                // We are returning a copy of the state with a changed counter
                // typically the stae will be composed of multiple branches
                return {...previousState, counter: previousState.counter + 1}
            case 'decrement':
                return {...previousState, counter: previousState.counter - 1}
            default:
                return previousState;
        }
    }
    const initState = {counter: 0}

    // useReducer accepts two args:
    // 1. a reducer function; it is responsible for transforming the state
    // 2. The initial state; an object compose of one of more props
    // useReducer returns an array comprising of two elements
    // 1. the state; an object
    // 2. a dispatch function; it is repsonsible for iniiating state transformations

    const [state, dispatch] = useReducer(reducer, initState);
    const {counter} = state;
    return (
        <>
        <p>Counter: {counter}</p>
        {/* 
        don't call the reducer directly
        instead call the dispatch function and pass it an action object
        it will then call the reducer which will transform state
        your handlers should no longer perform state transformations
        that work is now centralised
        */}
        <button onClick={() => dispatch({type: 'increment'})} className='btn btn-primary'>Increment Counter</button>
        <button onClick={() => dispatch({type: 'decrement'})} className='btn btn-primary'>Decrement Counter</button>
        </>
    )

}