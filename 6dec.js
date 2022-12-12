// intro of array

// let fruits = ["Apple", "Mango", "Grapes"];
// let number= [2,3,4,5];
// let mixed = [1,2,2.3, "string", null, undefined];

// console.log(fruits);
// console.log(number);
// console.log(mixed);

// let fruits= ["apple", "banana", "Mango"];
// let obj = {};
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

//  Array push Pop

// let fruits= ["apple", "banana", "grapes"];
// console.log(fruits);
//fruits.push("mango");
// fruits.pop()
// let poppedFruits = fruits.pop();
// console.log(fruits);
// console.log("Popped fruits is", poppedFruits);

//Unshift and shift

// let fruits =["apple", "banana", "Mango"];
// console.log(fruits);
// //fruits.unshift("grapes");
// fruits.shift();
// console.log(fruits);

//Primitive vs reference data types 

// let num1= 9;
// let num2= num1;
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);
// num1++;
// console.log("after incrementing num1");
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);

//Reference
// let  array1= ["item1", "item2"];
// let  array2= array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("after pushing element to  array1");
// console.log("array1", array1);
// console.log("array2", array2)


//Clone Array

let array1 = ["item1", "item2"];
let  array2 = array1.slice(0).concat["item3", "item4"];

// let array2 = [...array1];
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1);
console.log(array2);









// Function definition
// function sumThreeNumber(num1,num2,num3){
//     return num1 + num2 + num3;
// ");
// }
// const ans= sumThreeNumber(2,3,5);
// console.log(ans);

// //Arrow function 

// const singHappyBirthday = () => {
//     console.log("Happy Birthday to you....")
// }
// singHappyBirthday();

//  Function Expression
// const sumTwo = function (num1 , num2) {
// return num1 + num2;
// }
// const returnedValue = sumTwo(2,4);
// console.log(returnedValue);