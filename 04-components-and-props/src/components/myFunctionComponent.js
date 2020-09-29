import React from 'react';

export default function MyFunctionCompnent(props){
    console.log(props);
    // props.number +=1
return <p>This is my functional component and I have the following prop: {props.number}</p>
}