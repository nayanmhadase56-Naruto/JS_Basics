// Primitive Data Types
// nn bb ss u

let a= null
let b= 8909
let c = BigInt("890000098")
let d = false
let e =true
let f= "Nayan champ"
let g = undefined
let h = 78.9001

console.log(a,b,c,d,e,f,g,h)
console.log (typeof c)

// Non primitive data type
// Object
/* 

Object item {

    let g: ion

}
    Problems ❌

1️⃣ Object is not used like this to declare objects
JavaScript does not support class-style object declaration with Object item {}.

2️⃣ let cannot be used inside an object literal like that

3️⃣ : is used for key–value pairs, not type declarations.

4️⃣ ion is not defined

3. What is Object in JavaScript?

In JavaScript, Object is a built-in constructor used to create objects.

An object is a collection of key–value pairs.

Example:

const person = {
  name: "Rahul",
  age: 25
};

Here:

name → key

"Rahul" → value

age → key

25 → value
    */

const item ={            
    D: "power",
    e: 8900
}

/* 
const item ={            
    D: "power"
    e: 8900
}

Problem ❌

You forgot a comma , between the object properties.

In JavaScript objects, each key–value pair must be separated by a comma.

Correct Code ✅
const item = {
    D: "power",
    e: 8900
};

Structure of a JavaScript Object
Part	Example
Object	item
Property (Key)	D, e
Value	"power", 8900
Separator	,

Interview Tip 🎯

In JavaScript objects, properties are written as key:value pairs separated by commas.

*/

//console.log(D)

/*
Your code has a scope/reference error in JavaScript.

Your Code
const item ={
    D: "power"
}
console.log(D)
What’s Wrong ❌

D is a property of the object item, not a standalone variable.
So console.log(D) will cause:

ReferenceError: D is not defined
Correct Way ✅

You must access the property through the object.

const item = {
    D: "power"
};

console.log(item.D);

Output:

power


Why?

In JavaScript objects:

item → object

D → property (key)

"power" → value

You access properties using:

1️⃣ Dot notation

item.D

2️⃣ Bracket notation

item["D"]

Example:

const item = {
    D: "power"
};

console.log(item["D"]);

Output:

power


Quick Visual
Code	Meaning
item =	object
D	= property/key
"power" =	value
item.D	= access property

✅ Interview tip:

Object properties must be accessed using the object reference (e.g., object.property).

*/
console.log(item.D, item.e)
console.log(item["D"])


// Write JS program to store name, phone number, and marks of student using  Object

/* const object  {                
    phoneNumber: 9087655455
    Marks: 56/100

}

When creating an object, you must assign it using =.      
  
    */
/*
Syntax:

Variable keyword Variable assignment operator(=) define object using {}
inside bracket Should be inside curly braces {}
property or key: value, //Must be separated with comma ,
Property or key: value

variableKeyword variableName = {
    key: value,
    key: value
};

to call
console.log(variable.property or key)


const object = {  
    StoreName: Megamart  // Megamart is a string, so it must be in quotes.              
    phoneNumber: 9087655455 // Each property must be separated by a comma ,.
    Marks: 56/100 // to print as it is use "" to convert to string or it will b e calculated

}

*/
/*
const Object = {

    StoreName:"MegaMart",
    PhoneNumber: 0988776544,
    marks: "56/100"

}

//console.log(Object.StoreName, Object.PhoneNumber, Object.marks);
console.log(Object[["PhoneNumber"])

Problems ❌

1️⃣ Object is not your variable
Object is a built-in JavaScript constructor, not the object you created.

You should use your variable name (for example store or object).

2️⃣ Comma inside [] does not select multiple properties

["StoreName","Marks"]

In JavaScript this uses the comma operator, and it returns only the last value.

So this actually becomes:

Object["Marks"]

3️⃣ ["PhoneNumber"] is just an array, not a property access.

Correct Way ✅

First define the object:

const store = {
  StoreName: "Megamart",
  PhoneNumber: "9087655455",
  Marks: "56/100"
};
Access one property
console.log(store.StoreName);
Access multiple properties
console.log(store.StoreName, store.Marks, store.PhoneNumber);

Output:

Megamart 56/100 9087655455
Using bracket notation
console.log(store["StoreName"], store["Marks"]);
Quick Rule 📌
Syntax	Meaning
object.key	Dot notation
object["key"]	Bracket notation
object["key1","key2"]	❌ Invalid for multiple keys
Correct version similar to your idea
console.log(store["StoreName"], store["Marks"], store["PhoneNumber"]);

✅ Interview Tip

Object properties must be accessed one at a time using dot notation or bracket notation.

*/

/*
const object = {

    StoreName:"MegaMart",
    PhoneNumber: 0988776544,
    marks: "56/100"

}
console.log(object["PhoneNumber"])

let Store = Object()

{
    StoreName: "jimmy"
}

console.log(Store["Storename"])

Problems ❌
1️⃣ Object is not being assigned properly
let Store = Object()

This creates an empty object, but the block below it:

{
    StoreName: "jimmy"
}

is just a separate code block, not connected to Store.

2️⃣ Console.log is incorrect

JavaScript is case-sensitive.

Wrong:

Console.log()

Correct:

console.log()
3️⃣ Property name mismatch

You defined:

StoreName

But accessed:

Storename

JavaScript is case-sensitive, so these are different.

Correct Version ✅
Method 1 (Recommended – Object Literal)
let Store = {
    StoreName: "jimmy"
};

console.log(Store["StoreName"]);

Output

jimmy
Method 2 (Using Object constructor)
let Store = Object();

Store.StoreName = "jimmy";

console.log(Store["StoreName"]);
Key JavaScript Rules
Rule	Example
JavaScript is case-sensitive	console ≠ Console
Object properties must match exactly	StoreName ≠ Storename
Objects are defined using {}	{ key: value }

✅ Simple definition

An object in JavaScript stores data in key–value pairs inside {}.

*/



let Store = Object();

Store.StoreName= "jimmy";
Store.Revenue= 100000;

console.table([Store["StoreName"],Store["Revenue"]]);