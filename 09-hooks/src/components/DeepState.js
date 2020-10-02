import React, {useState} from 'react';

export default function DeepState(props) {
    const [person, setPerson] = useState({name: 'Tom', age: 25});
    const {name, age} = person;


    const handleButtonClickBad = event => {
        // This will NOT trigger a re-render
        // The ref we are setting is the same as the old ref
        // react tests to determine if a re-render is needed by doing this:
        // oldPerson === newPerson
        person.name = 'Thomas';
        setPerson(person);
    }

    const handleButtonClickGood = event => {
        setPerson(prevPerson => ({...prevPerson, name: 'Thomas'}))
    }
    return (
        <>
            <p>
                My name is {name} and I am {age} years old
            </p>
            <button onClick={(handleButtonClick) => setPerson(prevPerson =>({...prevPerson, name: 'Thomas'}))} className='btn btn-primary'>Changes the perssons name </button> 
            <button onClick={handleButtonClickBad} className='btn btn-primary'>Changes the perssons name badly</button> 
            <button onClick={handleButtonClickGood} className='btn btn-primary'>Changes the perssons name well</button> 

        </>
    )
}