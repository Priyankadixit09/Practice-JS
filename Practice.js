

// <--   Spread Operator  -->
//    var arr1= [10,20,30];
//    var arr2= [40,20];
//    var arr3= [...arr1, ...arr2];
//    console.log(arr3)

//    let obj1= {name:"priyanka",contactNo: 45637822, address: "abc"}
//    let obj2= {name:"ali",contactNo: 45637890, address: "xyz"}
//    let obj3= {...obj2 ,cnic:223333}
//    let  arr= [obj1, obj3];
//    console.log(arr);

// <-- Rest Operator -->

// function sum (name, ...Rest){
//     console.log(Rest);
// let sum= 0;
// for (let i in Rest) {
//     sum += Rest[i]
// }
// document.write(sum+ "<br>");
// }
// sum ("Priyanka", "")

// callback

// function fun(getFunText) {
//     setTimeout (function abc(){
//         getFunText("Hello")
//     }, 1000); 
   

// }
// function printFunText(text) {
//     console.log(text)
// }

// fun(printFunText) 

// <-- This Keywords -->
// function getThis() {
//     return this;
//   }
  
//   const obj1 = { name: "Priyanka" };
//   const obj2 = { name: "Ali" };
  
//   obj1.getThis = getThis;
//   obj2.getThis = getThis;
  
//   console.log(obj1.getThis());
//   console.log(obj2.getThis());

// var city= 'Lucknow';
// console.log(city); 

// const array = [1,2,3,4,5,6,7];
// function getSum(arrayList){
//     console.log(getSum)
// }
// const result= getSum(array)



// "use strict"

// const ownersName = 'priya';
// //const ownersName= 'anshu'; // cannot do this (error)
// console.log(ownersName);
// const fruit = 'pink'

// {
//     let city= 'Noida';
//     city = 'Delhi';

//     console.log(city);
// }
// console.log(city);

// function show()
// {
//     console.log(name)
// }

// var name= "Jai";
// show()

// function show1()
// {
    
//     var name1= "Jai";
// }
// console.log(name1)

// show1()


// const a=priya;
// const a=skli;  const variables can neither be updated nor re-declared.


// let city="noida";
//  let city= "delhi";  //let variables can be updated but not re-declared


//  Functional and Block scope

function displayName()
 {
    let ownerName= "sdfgh";
    if(ownerName)
    {
      let lastName= "rai";  //let is blocked scope
        var middleName="kumar";  //var is function scope
    }                      
    console.log(middleName)
}
displayName()

