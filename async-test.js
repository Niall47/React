// JS is single threaded
// To do something asyncronously means to do it later
// setTimeout is asynchronous
// JS is non-blocking

// The Callback function is added to the queue to be executed later
setTimeout(() => console.log('Hello'), 0)
console.log('Hi')

// Line 7 runs first as it runs every command in the stack before running any handler function