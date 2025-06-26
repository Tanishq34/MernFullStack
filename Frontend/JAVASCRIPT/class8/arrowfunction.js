// // normal function without return

// function sayhello(){
//     console.log("hey tanishq");
// }
// sayhello();

// // normal function with return
// function sayhello1( saysomethig){
//     let greet =("hey tanishq");
//     return greet + saysomethig;
// }
// let op=sayhello1( " is feeling hungry");
// console.log(op);

// //Arrow function--> its aanother way to to make the function in shorter way
// // [1]- Annonymous arrow fucntion
// const arrowanonymous =() =>{
//     console.log(" hello me hu anonymous arrow function");
// }
// arrowanonymous();

// // [1]- Named arrow fucntion
// const arrownamed = function sayhello2(){
//     console.log(" hello me hu Named arrow fucntion ");
// }
// arrownamed();



// // // function-: reusable block of code hota hai jiska kaam kisi particular task ko karana hota hai
// // // Normal function without return
// // function sayHello() {
// //   console.log("Hey Students");
// // }
// // sayHello();

// // // Normal function with return
// // function companyDetails(cName) {
// //   let suffix = "Own by DRF";
// //   return cName + suffix;
// // }
// // //1st way most of the cases me app return value ko variable me store karate hai
// // let op = companyDetails("Grow Tech");
// // console.log(op);

// // //2nd case direct call karte hai console.log() ke andar so vo return value ko print kar deta hai
// // console.log(companyDetails("Tech Mahindra"));

// //Arrow function -> Its a another way by which you can
// // make the function bcs it has shorter syntex

// // function Expresssion-> Jab kisi function ko aap kisi variable me store karte hai use function expression bolte hai

// // //without return
// // const callBackAnnoy = () => {
// //     console.log("hello me hu annonymous arrow function");
// // };
// // callBackAnnoy();

// // //Named arrow function without return
// // const callBackAnnoy1 = function sayHey() {
// //     console.log("hello me hu named arrow function");
// // };
// // callBackAnnoy1();

// //with return annonymous  arrow function
// const addTowNum1 = (a, b) => {
//     return a + b;
// };

// const addTowNum2 = (a, b) => a + b;

// let store1 = addTowNum1(10, 20);
// console.log(store1);

// //with return named arrow function
// // console.log(addNTowNum1)
// const addNTowNum1 = function getSum(a, b) {
//     return a + b;
// };
// console.log(x)
// var x;

// // You are using function expression so u are not allowed to call directly by their name
// // console.log(getSum(786, 31264))
// // let xx = getSum(7, 9078)
// let store2 = addTowNum1(100, 200);
// console.log(store2);

// console.log(getSum11)

// function getSum11(a, b) {
//     return a + b;
// };

//Callback Function-> ese function jo kisi dusre function me as a argument pass hote hai use callback function kahte hai
// HOC- esa function jo dusre function ko as a parameter leta hai use HOC function kahte hai
// parent function child function ko as a parameter le rha hai
// function parent(innerFun) {
//     console.log("hey i am parent");
//     innerFun(); // me call kar rha hu child ko// or me hee child hu ab bcs parameter me mera naam innerfun hai
// }

// // child as an argument pass ho rha hai to child vale ko me callback function bolunga
// parent(child);

// function child() {
//     console.log("hey i am child");
// }

// //Pure function-> ese function jo ki bar bar call karne par bhi same result/op dete hai
// function same() {
//     console.log("hey i am same");
// }
// same(); //har bar same hee o/p aaega kya-: hey i am same
// same(); //har bar same hee o/p aaega kya-: hey i am same
// same(); //har bar same hee o/p aaega kya-: hey i am same
// same(); //har bar same hee o/p aaega kya-: hey i am same
// same(); //har bar same hee o/p aaega kya-: hey i am same

// //ImPure function-> ese function jo ki bar bar call karne par alag alag result/op dete hai
// let x = 6;

// function Incre() {
//     return x++;
// }
// console.log(Incre(x)); //har bar same hee o/p aaega kya-: hey i am same
// console.log(Incre(x)); //har bar same hee o/p aaega kya-: hey i am same
// console.log(Incre(x)); //har bar same hee o/p aaega kya-: hey i am same
// ... (17 lines left)cas           v                                                                                  n







// IIFE function- if we want to use any sudden function so we use iife.
console.log( function (){
    console.log("this is IIFE example");
}())
