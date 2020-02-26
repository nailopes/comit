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

const fruits = ['apples', 'oranges', 'pears']; //apple value=0 orange=1 pears=2
fruits[3] = 'grapes';
fruits.push ('mangos'); // it will add to the and !
fruits.unshift ('strawberries'); // this will add to the beggining 
// fruits.pop(); pops the last one off
console.log(fruits);
console.log(Array.isArray(fruits)) ; //to check if is it a array
console.log(fruits.indexOf('orages')) //check the value, orange now is -1


const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30 ,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA',
    }
}

console.log(person.firstname, person.lastname);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstname , lastname, address:{city}} = person;
console.log(firstname);
console.log(city);

person.email = 'johndoe@gmail.com';
console.log(person); // we can see that email was add


const todos = [
    {
      id: 1,
      text: 'take out the trash',
      isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with the boss',
        isCompleted: true
      },
      {
        id: 3,
        text: 'dentist appt',
        isCompleted: false
      },
        
];

console.log(todos[1].text);


// For loop