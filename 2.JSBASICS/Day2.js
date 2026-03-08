
/*
In JavaScript, let and const are used to declare variables. 
They were introduced in ES6 (ECMAScript 2015) and are preferred over var.

1. let in JavaScript

let is used to declare a variable whose value can change later.

Key Points

Block scoped (works inside { } like if, loops, functions)

Can be reassigned

Cannot be redeclared in the same scope

2. const in JavaScript

const is used to declare a constant variable whose value cannot be reassigned.

Key Points

Block scoped

Cannot be reassigned

Must be initialized when declared

Used for values that should not change

✅ Best Practice

Use const by default

Use let only when the value must change
*/


const AccountID =1891928
let AccountName = "Naruto"
var AccountEmail= "narut@google.com"
var AccountPassword= "123445"
Accountstate= "Mumbai"
console.table([AccountID,AccountEmail,AccountPassword, Accountstate,AccountName]);
AccountName = 2
console.table([AccountID,AccountEmail,AccountPassword, Accountstate,AccountName]);
//AccountID= 1223344
//console.table([AccountID,AccountEmail,AccountPassword, Accountstate,AccountName]);

/*
Var is not used because of open scope
*/
{
    let Name="Nayan"
    //let Name="Nayan" It is not allowed to redeclare within the scope SyntaxError: Identifier 'Name' has already been declared
    console.log(Name)
}

let Name= "Rahul"
Name= "vinod" // Can be reassigned
let ExperienceYear= 3
let AutomationTester= true
console.log("Name",Name)
