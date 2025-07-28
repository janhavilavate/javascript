//1.answer
let a = prompt("Enter a number"); 
if (a % 2 === 0) {
    console.log("Even");
} 
else{
    console.log("Odd");
}
//2.answer
let b=prompt("Enter a number");
if (b > 0 || b < 0){
    console.log("Number is positive or nagative");
}
else{
    console.log("Number is zero");
}
//4.answer
let c=prompt("Enter frist number");
let d=prompt("Enter second number");
if(c > d){
    console.log("a id greater");
}
else{
    console.log("b is greater");
}
//5.answer
let marks=prompt("Enter marks(0-100):");
if(marks>=90){
    console.log("Grade:A");
}
else 
    if(marks >=75){
        console.log("Grade:B");
    }
else
    if(marks >= 50){
        console.log("Grade:c");
    }
else{
    console.log("Fail");
}
//6.answer
let year=prompt("Enter a year");
if ((year % 4===0 && year % 100 !==0) || year % 400===0){
    console.log("Leap year");
}
else{
    console.log("Not a leap year");
}
//7.answer
let age=prompt("Enter your age");
if(age >= 18){
    console.log("you can vote")
}
else{
    console.log("You can't vote");
}
//8.answer
let x=prompt("Enter a integer value");
if(x < 0){
    console.log("Absolute value:",-x);
}
else{
    console.log("Absolute value:",x);
}
//10.answer
let e=prompt("Enter frist number");
let f=prompt("Enter second number");
let g=prompt("Enter third number");
if(e<=f && e<=g){
    console.log("Smallest is:" +e);
}
else
    if(f<=e && f<=g){
        console.log("Smallest is:" +f);
    }
    else{
        console.log("Smallest is:" +g);
    }

