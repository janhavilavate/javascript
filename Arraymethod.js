//1.Adding/Removing 
//push 
let array1=[1,2,3,4,5,6]
array1.push(7);
console.log(array1);
//pop
let array2=[1,2,3,4,5,6]
array2.pop();
console.log(array2);
//unshift
let array3=[1,2,3,4,5,6]
array3.unshift(0);
console.log(array3);
//shift
let array4=[1,2,3,4,5,6]
array4.shift();
console.log(array4);

//2.Searching example
//includes
let array5=[1,2,3,4,5,6]
console.log(array5.includes(8));
//indexOf
let array6=[1,2,3,4,5,6]
console.log(array6.indexOf(2));
//lastIndexOf
let array7=[1,2,3,4,5,6]
console.log(array7.lastIndexOf(4));

//3.Sorting & reversing
//sort
let array8=[1,2,3,4,5,6]
let sorted=[1,3,5,6].sort();
console.log(sorted);
//reverse
let array9=[1,2,3,4,5,6]
sorted.reverse();
console.log(sorted);

//Conversion & string operation
//join
let array10=[1,2,3,4,5,6]
console.log(array10.join('-'));
//toString
let array11=[1,2,3,4,5,6]
console.log(array11.toString());
