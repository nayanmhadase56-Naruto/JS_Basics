let a = 9

if(a>=45){

console.log("You are eligible for annuity plan") 
}
else if(a<=14){
    console.log("You are valid but for Child care plan go and tell your parents")
}
else if(a<=17){
    console.log("You will be eligible in one year")
}
else if(a>=18){
    
    console.log("Age is valid for Life Insurance")
    console.log("You are eligible for annuity plan") // In if...else if chains, always put the most restrictive or higher condition first.
}
else{
    console.log("enter valid")
}

console.log("You are " , a<18?"not eligible":"Eligible") // condition? exp1:exp2


/*
let a = prompt ("Hey, what is your ag e") // convert to string
a = Number.parseInt(a) // convert to number

if(a >= 45){
    alert("You are eligible for annuity plan");
}
else if(a >= 18){
    alert("Age is valid for Life Insurance");
}
else if(a >= 15){
    alert("You will be eligible in one year");
}
else if(a >= 0){
    alert("You are valid but for Child care plan go and tell your parents");
}
else{
   alert("Enter valid age");
}



let a = prompt("Hey, what is your age");
a = Number.parseInt(a);

if(a >= 45 && a<=75){
    alert("You are eligible for annuity plan");
}
else if(a >= 18 && a<=45){
    alert("Age is valid for Life Insurance");
}
else if(a >= 15 && a<= 17){
    alert("You will be eligible in one year");
}
else if(a >= 0 &&a <= 15){
    alert("You are valid but for Child care plan go and tell your parents");
}
else{
   alert("Enter valid age");
}
*/

