// Variables, Data types, Comparision Operators, Logical operators, and Arrthemetic and Assignment
const PolicyNumber = 209892910
let Name= "NAruto"
let Age = 45
let Premium = 20333
let PriorClaim = null
let Renewal = true
let Year10Premium = 9008899n
let nominee;

/*
let "10YearPremium" = BigInt(9008899)
❌ Invalid in JavaScript

Problem

A variable name cannot start with a number. JavaScript identifiers must start with:

a letter

_
Rule for JavaScript Variables

Allowed:

Letters

_

$

Numbers (but not at the start)

Not allowed:

Spaces

Quotes

Starting with numbers


let "10YearPremium" = BigInt(9008899)

❌ This is invalid syntax in JavaScript.

Problem

Variable names cannot be in quotes. Quotes are used for strings, not variable identifiers.
$
*/

console.table ([ PolicyNumber,nominee,Name,Age,Premium,Year10Premium,PriorClaim])
console.log

/*
Your Code
const PolicyDetails = {
    PolicyNumber: 900000,
    Name: "NAruto",
    Age: 45,
    Premium: 20333,
    PriorClaim: null,
    Renewal: true,
    Year10Premium: 9008899n,
    nominee: undefined
}

PolicyDetails = { RenewalDate: "01/01/2025" }
❌ Problem

You declared PolicyDetails using const.

const means the variable reference cannot be reassigned.

So this line is not allowed:

PolicyDetails = { RenewalDate: "01/01/2025" }

It will throw an error like:

TypeError: Assignment to constant variable.
✅ What You Can Do With const Objects

You cannot replace the object, but you can modify its properties.

Example:

const PolicyDetails = {
    PolicyNumber: 900000,
    Name: "Naruto"
};

PolicyDetails.RenewalDate = "01/01/2025";

console.log(PolicyDetails);

Output:

{
  PolicyNumber: 900000,
  Name: "Naruto",
  RenewalDate: "01/01/2025"
}
If You Want to Reassign the Whole Object

Use let instead of const.

let PolicyDetails = {
    PolicyNumber: 900000
};

PolicyDetails = { RenewalDate: "01/01/2025" };
Quick Rule
Keyword	Reassign Variable	Modify Object Properties
const	❌ Not allowed	✅ Allowed
let	✅ Allowed	✅ Allowed
var	✅ Allowed	✅ Allowed

💡 Interview Tip (very common JS question):
const does not make the object immutable, it only prevents reassignment of the variable reference.
*/
const PolicyDetails ={

    PolicyNumber:900000,
    Name:"NAruto",
    Age:45,
    Premium:20333,
    PriorClaim :null,
    Renewal :true,
    Year10Premium:9008899n,
    nominee :undefined

    
}

PolicyDetails['RenewalDate']="01/01/2025"
PolicyDetails.Year1Premium = 900009
console.log(PolicyDetails.Year1Premium != PolicyDetails.Year10Premium)
console.log(PolicyDetails.Year1Premium == PolicyDetails.Year10Premium)
console.log(PolicyDetails.Year1Premium === PolicyDetails.Name)
console.log(PolicyDetails.Year1Premium !== PolicyDetails.Renewal)

console.table([PolicyDetails])

/*
PolicyDetails['RenewalDate:"01/01/2025']
Problems

The quotes are misplaced.

You are not assigning a value to the property.

The syntax should be object['property'] = value.
*/




