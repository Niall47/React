// Closures are behind React Hooks
// a closure is a function that captures a ref to a lexically scoped variable

let global = 'global';
function f() {
    let local = 'local';
}

function getClosure () {
    let lexical = 0;
    // The returned function is a closure
    // it captures a ref to a variable declared in the parent scope
    return function() {

        return lexical++;
    }
}

const closure = getClosure();

// The function maintains a reference to the object between invocations
// The function has state
console.log(closure());
console.log(closure());

// A hacky version of useState
function useState(initValue) {
    let state = {value: initValue};
        function setState(newValue){
            state.value = newValue;

        }
    return [state, setState];
}

const [counter, setCounter] = useState(0)

console.log(counter)
setCounter(counter.value + 1)
console.log(counter)