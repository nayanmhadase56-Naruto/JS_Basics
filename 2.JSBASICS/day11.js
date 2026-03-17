//Check if number is even or odd

let a=6;
/*
if(a%=1){                                      //%= is an assignment operator, not a comparison.a %= 1 means:a = a % 1 3 % 1 = 0

    console.log("number is even")
}
else{

    console.log("number is odd")
}
    */
if(a%2!==0){                                      //%= is an assignment operator, not a comparison.a %= 1 means:a = a % 1 3 % 1 = 0

    console.log("number is even")
}
else{

    console.log("number is odd")
}


//Find the largest of two numbers

let c= 10
let d=20

if(c>d){

console.log("number c is larger than d")
}

else{
console.log("number d is larger than c")

}

//Print grade using switch

let grade="A";

switch(grade){

    case "A":
        console.log("Excellent")
    break;
    case "B":
        console.log("Good")
    break;
    case "C":
        console.log("Fair")
    break;
    default:
    console.log("Invalid")

}

