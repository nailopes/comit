// String, Numbers, Boolean, null, undefined

const name = 'Luna';
const age = '30'
const rating = '4.5'
const isCool = true; //Boolean
const x = null; //object, error
const y = undefined;
let z; //undefined

console.log(typeof age)

//Concatenation (old way)
console.log('My name is '+name+' and I am '+age);

//Template String 
console.log(`My name is ${name} and I am ${age}`);

//String properties and methods
const a = 'Hello World';
console.log(a.length); //properties doesnt have ()

const b = 'Hello World';
console.log(b.toUpperCase()); //methods has to have()

const c = 'Hello World'; 
console.log(c.substring(0,5).toLowerCase());

const d = 'Hello World';
console.log(d.split('')); // if you wanna split by letter put empty quotes ''

const e = 'technology, computers, IT, code';
console.log(e.split(', ')); // if you wanna wich tag with a array

//Arrays - variables  that hold multiple values 

const numbers = new Array(1,2,3,4,5);
console.log(numbers);



