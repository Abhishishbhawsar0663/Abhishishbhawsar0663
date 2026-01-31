//Sum of all natural numbers (1 to n)
// var n = 10;
// var sum = 0;

// for (var i = 1; i <= n; i++) {
//   sum = sum + i;
// }

// console.log(sum);

//Sum of all even numbers from 1 to 100
// var sum = 0;

// for (var i = -100; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

//Sum of all odd numbers from 1 to 100
// var sum = 0;

// for (var i = -100; i <= 100; i++) {
//   if (i % 2 != 0) {
//     sum = sum + i;
//   }
// }

// console.log(sum);

//Power of a number using for loop and function
// function power(num, pow) {
//   var result = 1;

//   for (var i = 1; i <= pow; i++) {
//     result = result * num;
//   }

//   return result;
// }

// console.log(power(2, 3));

//Sign of product of three numbers
// var a = -2;
// var b = 3;
// var c = 4;

// var product = a * b * c;

// if (product > 0) {
//   alert("+");
// } else if (product < 0) {
//   alert("-");
// } else {
//   alert("0");
// }

//Fibonacci series up to a certain number
// var a = 0;
// var b = 1;
// var limit = 20;

// console.log(a);
// console.log(b);

// for (;;) {
//   var c = a + b;

//   if (c > limit) {
//     break;
//   }

//   console.log(c);
//   a = b;
//   b = c;
// }

//Find Nth Fibonacci number
// var n = prompt("Enter a number");
// var a = 0;
// var b = 1;
// var c;

// if (n == 1) {
//   alert(a);
// } else if (n == 2) {
//   alert(b);
// } else {
//   for (var i = 3; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   alert(c);
// }

//Print all even numbers up to n
// var n = prompt("Enter a number");

// for (var i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//Factorial of a number
// var n = prompt("Enter a number");
// var fact = 1;

// for (var i = 1; i <= n; i++) {
//   fact = fact * i;
// }

// alert(fact);

//Function to find sign of a number
// function findSign(num) {
//   if (num > 0) {
//     return "Positive";
//   } else if (num < 0) {
//     return "Negative";
//   } else {
//     return "Zero";
//   }
// }

// var n = prompt("Enter a number");
// alert(findSign(n));

//Function to find sign of product of three numbers
// function signOfProduct(a, b, c) {
//   var p = a * b * c;

//   if (p > 0) {
//     return "+";
//   } else if (p < 0) {
//     return "-";
//   } else {
//     return "0";
//   }
// }

// var a = prompt("Enter first number");
// var b = prompt("Enter second number");
// var c = prompt("Enter third number");

// alert(signOfProduct(a, b, c));

//Print 1 to 100 and show multiple of 3, 5, 7
// for (var i = 1; i <= 100; i++) {
//   var msg = "";

//   if (i % 3 == 0) {
//     msg = msg + " multiple of 3";
//   }
//   if (i % 5 == 0) {
//     msg = msg + " multiple of 5";
//   }
//   if (i % 7 == 0) {
//     msg = msg + " multiple of 7";
//   }

//   console.log(i + msg);
// }

//Function to return data type
// function findtype(value) {
//   return typeof value;
// }

// var input = prompt("Enter any value");
// alert(Typeof(input));

// Nested for by Bhavesh Sir - 

// 1
// 1  2
// 1  2  3
// 1  2  3  4
// 1  2  3  4  5

// for(let row = 1; row <= 5; row++){
//     for(let col = 1; col <= row; col+=1){
//         document.write(col, "&nbsp;&nbsp;&nbsp;"); 
//     }
//     document.write("<br>");
// }



// 1
// 2  2
// 3  3  3
// 4  4  4  4
// 5  5  5  5  5


// for(let i = 1; i <= 5; i++){
//     for(let k = 1; k <= i; k++){
    //         document.write(i, "&nbsp;&nbsp;");
    //     }
    //     document.write("<br>");
// }
    
    

// 5  5  5  5  5
// 4  4  4  4
// 3  3  3
// 2  2
// 1



// for(let i = 5; i >= 1; i--){
//     for(let j = i; j >= 1; j--){
//         document.write(j , "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }
