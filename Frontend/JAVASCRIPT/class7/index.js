
// let num = parseInt(prompt());
// function getOddNum(x) {
//     if (x % 2 === 1) {
//         return true;
//     }
//     return false;
// }

// // let isOdd=getOddNum(num);// for user input


// for (let i = 1; i <= 100; i++) {
//     let isOdd = getOddNum(i);
//     if (isOdd) {
//         console.log(i);

//     }
// }


// function getEvenNum(x) {
//     if (x % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// for (let i = 1; i <= 100; i++) {
//     let isEven = getEvenNum(i);
//     if (isEven) {
//         console.log(i);

//     }
// }


// function getPrime(x) {
//     for (let j = 2; j < x; j++)
//         if (x % j === 0) {
//             return false;
//         }
//     return true;
// }
// for (let i = 1; i <= 100; i++) {
//     let isPrime = getPrime(i);
//     if (isPrime) {
//         console.log(i);

//     }
// }

// function isStrong(num){
//     let Ssum = 0;
//     let originalNum = num;
//     while(num>0){
//         let digit = num % 10;
//         let  fact = 1;
//         for(let i = 1;i<=digit;i++){
//             fact = fact * i;
//         }
//         Ssum += fact;
//         num = Math.floor(num / 10 )
//     }
//     return originalNum === Ssum;
// }

// for(let i = 1;i<1000;i++){
//     if(isStrong(i)){
//         console.log(i)
//     }
// }




// funtion to print a triangle pattern
function gettrianglepattern(n)
{

let triangle="";
 
for( let row=1;row<=n;row++){
    for(let sp=1; sp<=n-row;sp++){
        triangle+=" ";
    }
    for(let col=1;col<=2*row-1;col++){
            triangle+="*";
    
    }
            triangle+="\n";

}
console.log(triangle);
}
(gettrianglepattern(10));