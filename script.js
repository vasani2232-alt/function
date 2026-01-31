// function myfunction(msg){
//     //parameter -> input
//     console.log(msg);
// }
// myfunction("I love JS"); //argument

//function -> 2 numbers, sum

// function sum(x, y){
//      //local variables ->scope
//     s = x + y;
//     console.log("before return");
//      return s;
// }
// let val = sum(3, 4);
// console.log(val);

//sum function
// function sum(a, b){
//     return a + b;
// }

// //Modern JS
// const arrowSum = (a, b) => {
//     console.log(a + b);
// };

// //multiplication function
// function mul(a, b){
//     return a * b;
// }
// const arrowMul = (a, b) => {
//     console.log(a * b);//return a * b;
// }

// const printHello = () =>{
//     console.log("hello");
// };

//practice que1
// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char ==="e" || char==="i" || char ==="o" || char ==="u"){
//             count++;
//         }
//     }
//     return count;
// };
// let arr = ["pune", "delhi", "mumbai"];

// // arr.forEach(function printVal(val){//value at each idx
// //    console.log(val); 
// // });

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });

//map method
// let nums = [67, 52, 39];

// let newArr = nums.map((val) => {
//     return val * 2;
// });

// console.log(newArr);

// let calcSquare = (num) => {
//     console.log(num * num); //num**2
// };

//Filter method
// let arr = [1, 2, 3, 4, 5, 6, 7];

// let evenArr = arr.filter((val) => {
//     return val > 3;
// })

// console.log(evenArr);

//Reduce method
// let arr = [5, 6, 2, 1, 101, 3];

// const output = arr.reduce((prev, curr) => {
//     return  prev < curr ? prev : curr;//prev + curr;
// });
// console.log(output);

//Practice Que 1 
// let marks = [97, 64, 32, 49, 99, 96, 86];

// let toppers = marks.filter((val) => {
//     return val > 90;
// });

// console.log(toppers);

//Practice Que 2 
let n = prompt("enter a number:");

let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("Sum = ",sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("Factorial = ", factorial);