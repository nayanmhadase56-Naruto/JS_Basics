const A = true      // const A =   ReferenceError: Cannot access 'A' before initialization
console.log(A)

let B = BigInt (2344)
console.log(B)

//  Primitive Data types nn bb ss u

let a = 89
let b = null
let c = true
let d = false
let e = BigInt(3456)
let f = "India is Champion"
let g = Symbol("@#$")
let h= undefined
let i;
const j= undefined
console.log([a, b])

let k ={
  Test:78
  //Test: "test"
}
 console.log(k.Test)
 console.log(k['Test'])
/*
Your code:

let g = @#$

❌ Still invalid, because @#$ is not a Symbol value.

1️⃣ What Symbol actually is in JavaScript

Symbol is a primitive data type introduced in ECMAScript 2015 (ES6).

It is used to create unique identifiers.

Example:

let id = Symbol();
console.log(typeof id);

Output:

symbol
2️⃣ Creating a Symbol with a description
let g = Symbol("@#$");
console.log(g);

Output example:

Symbol(@#$)

Important:

"@#$" here is just a description

It does not mean the value is @#$

3️⃣ Symbols are always unique
let a = Symbol("test");
let b = Symbol("test");

console.log(a === b);

Output:

false

Even with the same description, they are different symbols.

4️⃣ Common use case (object property keys)
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 101
};

console.log(user[id]);
5️⃣ JavaScript primitive data types
Type
Number
String
Boolean
Undefined
Null
Symbol
BigInt

✅ Key point

Code	Valid?	Reason
let g = @#$	❌	Invalid syntax
let g = "@#$"	✅	String
let g = Symbol("@#$")	✅	Symbol

💡 Simple rule

@#$ → must be inside quotes → String

Symbol() → used to create unique identifiers

*/

// Non primitive data type Object
/*
const list = {
    Tshirt: {item:"Tshirt",Quantity:89},
    Shirt: 09,
    Jeans: 90,
}

console.log(list.Tshirt.item + "Quantity =" + list.Tshirt.Quantity)
console.log("Shirt Quantity =" +  list.Shirt)
*/