import React, {useEffect, useState} from 'react';

export default function Lifecycyle(props){
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    // side effects shoudl NOt be performed in the main body of the function
    // they will be executed everytime the component is re-rendered
    // setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
    // the solution is to use useEffect
    // The callback passed to useEffect will be executed after EVERY re-render (by default)
    // It is effectivley equivilent to a componentDidUpdate in a class component (by default)

    // the optional second argument is a list of dependencies
    // dependencies are items of state or props, changes to which should result in the effect being re-executed
    // In this case the effect is not dependant on anything and so should not re-execuste after the first time round

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date().toLocaleTimeString()))
        // You can return a function that will be executed before the effect is applied next time
        return () =>{clearInterval(intervalId);}
    }, []); // note the second arg is an empty array

    return (<p>The current time is: {time}</p>);
}