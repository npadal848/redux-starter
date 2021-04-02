import { indexOf } from 'lodash';
import { compose, pipe} from 'lodash/fp'

let input = "   Nagesh   ";
let output = "<div>"+ input.trim() +"</div>"; 
// alert(output);

// To solve above problem we can do as follows
const trim = str => str.trim();
const wrap = type => str => `<${type}> ${str} </${type}>`;
const toLowerCase = str => str.toLowerCase();

//here is one problme as we can see composite functional calling, we can follow compose from lodash to solve this issue
// const render = wrap(toLowerCase(trim(input)));

// Here we have to follow the order from left to right, to solve this issue we can use pipe from lodash
// const transform = compose(wrap, toLowerCase, trim);

const transform = pipe(trim, toLowerCase, wrap("div"));
transform(input);

// console.log(transform(input))

const person={
    name : "Nagesh",
    address: {
        city : "HYD",
        country : "IND"
    }
}

//Sallow Copy
const updated1 = {
    ...person, name: "Pooja"
}
updated1.address.city="KPT";

// console.log(updated1)
//Deep Copy
const updated2 = {
    ...person, name: "Pooja",
    address: {
        ...person.address, 
        city: "KPT",
        country : "INDIA"
    }
}

// console.log(updated2)
// console.log(person)

// ARRAY

let numbers = [1, 2, 3];
let index = numbers.indexOf(2);

// Adding
const adding = [...numbers.slice(0, index), 
    4 ,
    ...numbers.slice(index)    
]

// console.log(numbers);
// console.log(adding);

// Removing
let filter = numbers.filter(n => n!==2);
// console.log(filter);

// Updating
let updated = numbers.map(n=> n===2? 22 : n);
console.log(updated);

