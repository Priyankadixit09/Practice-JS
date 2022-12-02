// if else condition

// let age= 17;
// if (age>=18){
//     console.log("user can play ddlc")
// }else {
//     console.log("user can play mario");
// }

// let num = 14;
// if (num%2=== 0){
// console.log("even");
// }else {
//     console.log("odd")
// }

//falsy value(null,"",undefined,0,false) and truthy value("string",1 -1)

// let firstName ="Anshu";
// if (firstName){
//     console.log(firstName)
// }else {
//     console.log("firstName is empty");
// }

//ternory operator/ conditional operator

// let age = 18;
// let drink;

// if(age>=5){
//     drink= "coffee";
// }else {
//     drink= "milk";
// }
// console.log(drink);

// let age= 8;
// let drink = age>= 5 ? "coffee": "milk";
// console.log(drink)

//AND OR Operator

// let firstName="Anshu";
// let age= 16;
// if (firstName[0]==="A" && age>=18){


// console.log("Name start with A && and above 18");
// } else{
//     console.log("Invalid Result")
// }
// if (firstName[0]==="A" || age>=18){


//     console.log("Name start with A && and above 18");
//     } else{
//         console.log("Invalid Result")
//     }

// nested if else

// let winningNumber = 19;
// let userGuess= +prompt("Guess a number");
// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess<winningNumber){
//         console.log("too low!!");
//     }else{
//         console.log("too high!!");
//     }
// }

//if
//else if
//else if
//else if
//else

// let tempInDegree= 67;
// if(tempInDegree<0){
//     console.log("Extremely cold outside");
// } else if(tempInDegree<16){
//     console.log("It is cold outside")
// }else if(tempInDegree<25){
//     console.log("Wheather is okay")
// }else if(tempInDegree<35){
//     console.log("Lets go for swim")
// }else if(tempInDegree<45){
//     console.log("Turn on Ac")
// }else {
//     console.log("too hot!!")
// }

//Switch Statement

// let day= 9;
// switch (day){
//     case 0:
//         console.log("Sunday");
//         break;
//         case 1:
//         console.log("Monday");
//         break;
//         case 2:
//         console.log("Tuesday");
//         break;
//         case 3:
//         console.log("Wednesday");
//         break;
//         case 4:
//         console.log("Thursday");
//         break;
//         case 5:
//         console.log("Friday");
//         break;
//         case 6:
//         console.log("Saturday");
//         break;
//         default:
//             console.log("Invalid Day")
// }
    
//While loop
// let num= 10;
// let total= 0;
// let i=0;

// while(i<=10){
// total= total + i;
// i++;
// }
// console.log(total);


// let total=(num*(num+1))/2;
// console.log(total);

//intro for loop
//print 0 to 9

// for(let i= 0; i<=9; i++){
// console.log(i);
// }

// let total= 0;
// let num = 10;
// for (let i =1; i<=num; i++){
//     total=total + i;
// }
// console.log(total);

//break and continue keyword

// for (let i= 1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }
// for (let i=1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i)
// }

//do while loop

let i =0;
do{
    console.log(i);
    i++;
}
while(i<=10);
console.log(" value of i is ", i);