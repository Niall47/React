// everything in js can be converted to a boolean
// meaning everything is either truthy / falsey

console.log(Boolean(null)); //null = false
console.log(Boolean('')); //empty string = false
console.log(Boolean(NaN)); //not a number = false
console.log(Boolean([])); //empty array = true
console.log(Boolean({})); //empty object = true
console.log(Boolean(() => {})); //empty function = true