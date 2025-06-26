// DEEP & SHALLOW

// let obj = {
//     name:'adarsh',
//     gg:{
//         id:'1'
//     }
// }

// let obj2 = obj ; //shallow copy (change will be on both Orignal & Copy)
// let obj2 = {...obj} ; // shallow copy 
// let obj2 = Object.assign({},obj) ; // shallow copy

// let obj2 = JSON.parse(JSON.stringify(obj)); //Deep copy

// obj2.gg.id = '2';
// obj2.name = 'vidhi'

// console.log(obj);
// console.log(obj2);

//Promis


// let mypro = new Promise((resolve,reject)=>{
// resolve('this is resolve');
// reject('this is reject')

// });
// mypro.then((ip)=>console.log(ip))
// .catch((err)=>console.log(err))

// console.log(mypro);


//ApI fatch

// let x = fetch('https://jsonplaceholder.typicode.com/users');
// let arr =[];
//  arr = x.then((ar)=>ar.json().then((data)=>console.log(data)).catch((err)=>console.log(err)))



// this keyword-show the obj of that function which is called by you

// console.log(this);
// const obj={
//     uname:"tanu",
//     ucast:"koshti",
//     printname: function (){
//         console.log(this.uname)
//     console.log(this)
//     } 
// };
// obj.printname()

// with arrow function- it show undefined in case of arrow function and by default it show window object


// const obj={
//     uname:"tanu",
//     ucast:"koshti",
//     printname:  ()=>{
//         console.log(this.uname)
//     console.log(this)
//     } 
// };
// obj.printname()

// 4th case 
// function hello( ) {
//     console.log(this);
// }
// hello();
// // solution- function ko point krne k liyee
// new hello();


// ***5th case - use in closure
// const user={
//     id: 201,
//     uname: "tanu",
//     printdata: function(){
//     function sayhello() {
//         console.log(this);
//     }
//     sayhello()
// }
// }
// user.printdata()

// async and await

// const url="https://jsonplaceholder.typicode.com/users"
// let x = fetch('https://jsonplaceholder.typicode.com/users');
// let arr =[];
//  arr = x.then((ar)=>ar.json().then((data)=>console.log(data)).catch((err)=>console.log(err)))


//  const url = "https://jsonplaceholder.typicode.com/users";
// const ans = fetch(url);
// let arr = []
// const data = ans.then((op) => {
//     op.json().then((opd) => {
//         console.log("my data", opd);
//         arr.push(opd)
//     });
// });
// console.log("Mere array me data", arr)

// async  function callapi(){
//   const res=  await fetch("https://jsonplaceholder.typicode.com/users")
// const result= await res.json();
// console.log(result);
// }
// callapi();


// Q
// const user11 = {
//    userName: "syam",
//    age: 20,
//    address: {
//     city: "katni",
//      state: "mp",
//    },
//  };

// Q
// const user12 = { ...user11,...user11.address };
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("user12 has newly assign city which in user11", user12); 
// const user12 = JSON.parse(JSON.stringify(user11));
// user12.userName = "Raghav";
// user12.address.city = "Jabalpur"; 
// console.log("no changes bcs we do deep copy", user11); 
// console.log("name and city in user12 object has changed", user12); 

// Q
// const myNumbers = [2, 4, 5, 6, 7];
// const modifyArray = myNumbers.map((num) => {
//   return (num = num / 2);
// });
// const modifyArray1 = myNumbers.map((num) => {
//     console.log(num/2);
    
//     (num = num / 2)});
// console.log("Given Array ", myNumbers);
// // console.log("Modified array ", modifyArray);
// console.log("without return ", modifyArray1);

// // Q
// const Numbers = [0, 2, 4, 5, 6, 7];
// // ans is below
// const filterArray = Numbers.filter((num) => {
//   return num >= 4;
// });

// console.log("Orginal array ", Numbers);
// console.log("Filter array", filterArray);

// Q

// function values(a,c,...args){
//     //error
//   console.log(a,args,c);
// }

// function values(a, c, ...args) {

//   console.log(a, c, args);
//   //ans-: 1 10 [ 2, 4, 5, 6, 8 ]
// }
// values(1, 10, 2, 4, 5, 6, 8);

// Q

// let result = PrintValue();
// console.log(result);

// Q
// let a= [1,2];
// let b= [1,2]
// console.log(a==b)
// console.log([1,2]===[1,2])

// // Q

// function outer() {
//   function inner() {
//     console.log(x);
//   }
//   const x = 10;
//   return inner;
// }
// const result = outer();
// result();

// Q

//  for(let i=0;i<=3;i++){
//    setTimeout(()=>{
//        console.log(i)
//    },1000);
//  }

// Q

//  for(var i=0;i<=3;i++){
//   function ab(i){
//       setTimeout(()=>{
//       console.log(i)
//   },1000);}
//   ab(i);
// }
// Q

// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 + i * 1000);
// }
//  Q.

// const foo=()=>{
//   console.log(this.name);
//  }
//  foo.call({ name: "Mahi" });

// Q.
 
//  function foo1(){
//   console.log(this.name);
// }
// foo1.call({name:"mohan"})

// Q

// function foo1() {
//   console.log(this.name); 
  
//   const bar = () => {
//     console.log(this.name); 
//   };
//   bar();
// }
// foo1.call({ name: "Mahi" });
//  
//  Q. Freeze the object 
// const user = {
//   id: 123,
//   name: "abc",
//   address: {
//     city: "katni",
//     state: "MP",
//   },
// };

//  Q. 

// fool();
// var fool=20;
// function fool(){
//     console.log("Calling ")
// }
// fool();
 
// Q.

// async function foo23() {
//   throw new Error("Hello");
//   return "hello";
// }
// const result12 = foo23();
// console.log("Reject the Promise ",result12);
//  
// Q.
// async function greet() {
//   return new Promise(() => {});
// }
// const ans = greet();
// console.log("Pending the promise",ans);

//  Q. Flatten an given below an array 
// let arr= [1,[2,3],[[4,5]],[[[6]]]];
// 
// Q.
// console.log(typeof(NaN));// this is number
// console.log(Nan===NaN);// it can anything  so return false

// Q.
// Destructure the property from the object
// // const user = { userNamename: "ramesha", age: 24 };


// async function storeAns() {
//   let result = await PrintValue();
//   console.log(result);
//   return result;
// }
//  storeAns();
//  async function PrintValue() {
//   return "Hello world";
// }
// let ans =  PrintValue();
// console.log(ans);
// async function storeAns() {
//   let result = await PrintValue();
//   console.log(result);
//   return result;
// }
//  storeAns();


//  Q.
// async function PrintValue() {
//   return "Hello world";
// }
// let ans = PrintValue();
// // how to resolve a promise
// ans.then((res) =>{
//     console.log(res);
    
// })
// console.log(ans);

// Q.
// debugger
// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 + i * 1000);
// }


  
  const bar = () => {
    console.log(this.name); 

    function foo1(name) {
  console.log(this.name); 
  };
   return foo1();
}
foo1.call({ name: "Mahi" });