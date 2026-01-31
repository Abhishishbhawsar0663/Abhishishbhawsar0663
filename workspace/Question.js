// Build a logic to print the following patternas - 

// 1.
// 5  4  3  2  1
// 5  4  3  2
// 5  4  3
// 5  4
// 5

// for (let i = 5; i >= 1; i--) {
//     for (let j = 5; j >= 6-i; j--) {
//         document.write(j + "&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }
// document.write("<br>");




// 2.
//          1
//        2   2
//      3   3   3
//    4   4   4   4
//  5   5   5   5    5


// for (let row = 1; row <= 5; row++) {
//     for (let col = 1; col <= 5; col++) {

//         if (col <= 5 - row || col === 0) {
//             document.write("&nbsp;&nbsp;");
//         } else {
//             document.write(row + "&nbsp;&nbsp;&nbsp;");
//         }

//     }
//     document.write("<br>");
// }
// document.write("<br>");

// 3.
//          1
//        1   2
//      1   2   3
//    1   2   3   4
//  1   2   3   4    5


// for (let row = 1; row <= 5; row++) {
//     for (let col = 1; col <= 5; col++) {

//         if (col <= 5 - row) {
//             document.write("&nbsp;&nbsp;&nbsp;");
//         } else {
//             document.write(col + row -5 + "&nbsp;&nbsp;&nbsp;&nbsp;");
//         }

//     }
//     document.write("<br>");
// }

// document.write("<br>");

// 4.
//          1
//        1   2
//      1       3
//    1           4
//  1   2   3   4    5

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write("&nbsp;&nbsp;&nbsp;");
  }

  document.write("1");
  if (i > 1) {
    for (let j = 1; j <= i; j++) {
      document.write("&nbsp;&nbsp;&nbsp;");
    }
    
    document.write(i);
  }else{

  document.write("<br>");
}

}
for (let i = 1; i <= 5; i++) {
  document.write(i + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
}
 



// 5.
//  5   5   5   5    5
//    4   4   4   4
//      3   3   3
//        2   2
//          1


// for (let row = 5; row >= 1; row--) {

//     for (let space = 5; space > row; space--) {
//         document.write("&nbsp;&nbsp;&nbsp;");
//     }

//     for (let col = 1; col <= row; col++) {
//         document.write(row + "&nbsp;&nbsp;&nbsp;");
//     }

//     document.write("<br>");
// }


// 6. find whether the input given by user is a armstrong number or not (for nth number of digits) 

// let orgNo = Number(prompt('Enter any number: '));
// let temp = orgNo;
// let exp = 0;

// while (temp > 0) {
//     temp = parseInt(temp / 10);
//     exp++;
// }

// temp = orgNo;
// let sum = 0;


// for (let i = 1; i <= exp; i++) {
//     let num = temp % 10;
//     sum += num ** exp;
//     temp = parseInt(temp / 10);
// }

// if (orgNo === sum) {
//     console.log(orgNo + " is an Armstrong number");
// } else {
//     console.log(orgNo + " is not an Armstrong number");
// }


// 7. find whether the input is a even number or odd number (build this logic without using '%')

// let num = 0;

// let temp = num;

// while (temp > 1) {
//     temp = temp - 2;
// }

// if (temp === 0) {
//     console.log(num + " is even");
// } else {
//     console.log(num + " is odd");
// }

// 8. print a string in reverse format - 'JavaScript' (you can use .split method to split the strings)

// let str = "Abhishish";
// let revStr = str.split("").reverse();

// console.log("String " + str);
// console.log("Reverse string " + revStr);


// 9. print the factorial of the given input (input will be given by the user)

// let num = Number(prompt("Enter a number to find its factorial: "));
// let factorial = 1;

// if (num < 0) {
//     console.log("Factorial is not defined for negative numbers");
// } else {
//     for (let i = 1; i <= num; i++) {
//         factorial *= i;
//     }
//     console.log("Factorial of " + num + " is " + factorial);
// }

// 10. print 1 to 110 and identify which number is divisible by 3, 5 & 7.

// for (let i = 1; i <= 110; i++) {
//     let msg = "";

//     if (i % 3 === 0) msg += "3";
//     if (i % 5 === 0) msg += (msg ? " & 5" : "5");
//     if (i % 7 === 0) msg += (msg ? " & 7" : "7");

//     if (msg) {
//         console.log(i + " divisible by " + msg);
//     } else {
//         console.log(i);
//     }
// }