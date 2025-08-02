//1.answer
for(let a=1; a<=10; a++){
    console.log(a);
}
//2.answer
for(let b=1; b<=20; b++){
    if(b % 2==0){
        console.log(b);
    }
}
//3.answer
let N =prompt("Enter a number");
let sum = 0;
for (let m = 1; m <= N; m++) {
    sum += m;
}
console.log(`The sum of the first ${N} natural numbers is: ${sum}`);

//6.answer
let n = prompt("Enter number n to print numbers in reverse from n to 1:");
console.log(`\nNumbers from ${N} to 1 in reverse order:\n`);
for (let x = n; x >= 1; x--) {
    console.log(x);
}
//10.answer
let k = parseInt(prompt("Enter the number of terms in the Fibonacci series:"));
let a = 0, 
b = 1;
console.log(`Fibonacci series up to ${k} terms:`);
for (let i = 1; i <= k; i++) {
    console.log(a);
    let l = a + b;
    a = b;
    b = l;
}

