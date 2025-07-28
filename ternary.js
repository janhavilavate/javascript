//Ternary operator//

//1.answer
let num=prompt("Enter a number");
let result1 = num % 2 === 0 ? "Even" : "Odd";
console.log(result1);

//2.answer
let age=prompt("Enter a age");
let result2 = age>=18 ? "you cant vote" : "you can vote";
console.log(result2);

//3.answer
let num1=prompt("Enter frist number");
let num2=prompt("Enter second number");
let result3 = num1>=num2 ? "num1 is greater": "num2 is greater";
console.log(result3);

//4.answer
let num3=prompt("Enter a number");
let result4 = num3 % 5? "Nivisible" : "Not divisible";
console.log(result4);

//Nested if else//

//1.answer
let a=prompt("Enter a number");
if(a>0){
    console.log("positive");
}
else{
    if(a<0){
     console.log(nagative);
    }
    else{
        console.log(zero);
    }
}
//3.answer
let chr = prompt("Enter a character:");
if ((chr >= 'a' && chr <= 'z') || (chr >= 'A' && chr <= 'Z')) {
    if ("ABDCefgh".includes(chr)) {
        console.log("Vowel");
    } else {
        console.log("Consonant");
    }
} else {
    console.log("Not a letter");
}
//4.answer
let b=prompt("Enter a number");
if(b % 2===0){
    if(b % 8===0){
        console.log("Even or Divisible by 8");
    }
else{
    console.log("Even but no divisible");
}
}
else{
    console.log("Not divisible");
}
//5.answer
let c=prompt("Enter mark of frist subject");
let d=prompt("Enter mark of second subject");
let e=prompt("Enter mark of third subject");
let avg=(c + e + d) /3;
if(avg>=90){
    console.log("Grade:A");
}
else{
    if(avg>=75){
        console.log("Grade:B");
    }
    else{
        if(avg>=50){
            console.log("Grade:C");
        }
    else{
        console.log("Fail");
    }
}
}
//Else if ladder//

//1.answer
let day = prompt("Enter day number (1-7):");
if (day === 1) {
    console.log("Sunday");
} 
else if (day === 2) {
    console.log("Monday");
} 
else if (day === 3) {
    console.log("Tuesday");
} 
else if (day === 4) {
    console.log("Wednesday");
} 
else if (day === 5) {
    console.log("Thursday");
} 
else if (day === 6) {
    console.log("Friday");
} 
else if (day === 7) {
    console.log("Saturday");
} 
else {
    console.log("Invalid day number");
}
//2.answer
let marks = prompt("Enter marks (0–100):");
if (marks >= 90) {
    console.log("Grade: A");
} 
else if (marks >= 75) {
    console.log("Grade: B");
} 
else if (marks >= 60) {
    console.log("Grade: C");
} 
else if (marks >= 40) {
    console.log("Grade: D");
} 
else {
    console.log("Grade: F");
}
//4.answer
let temp = prompt("Enter temperature:");
if (temp >= 40) {
    console.log("Very Hot");
} 
else if (temp >= 30) {
    console.log("Hot");
} 
else if (temp >= 20) {
    console.log("Warm");
} 
else if (temp >= 10) {
    console.log("Cold");
}
 else {
    console.log("Very Cold");
}
//5.answer
let z= prompt("Enter a number:");
if (z % 2 == 0 && z % 3 == 0) {
    console.log("Divisible by both 2 and 3");
} 
else if (z % 2 == 0) {
    console.log("Divisible only by 2");
} 
else if (z % 3 == 0) {
    console.log("Divisible only by 3");
} 
else {
    console.log("Not divisible by 2 or 3");
}