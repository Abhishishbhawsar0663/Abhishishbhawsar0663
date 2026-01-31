//nested if
// create optimized solution

//dilogboxes
// prompt-take user input   prompt box
//confirm
//alart


//switch
// let day = 'sunday';
// switch(day){
//     case 'sunday';
//     console.log("today is sunday")
//     break;
//     case 'saturday';
//     console.log("today is saturday")

//     default:
//         console.log("invalid")

// }

//loop
// variable declaration 
// apply conditon
//user input


//while
// let num = 1;
// while(num < 11){
//     console.log(num);
//     num++;
// }

//do while
// let num = 1;
// do{
//     console.log(num);
//     num++;
// }
// while(num < 11)

// //for
// for(let num = 1; num < 11; num;){
//     console.log(num);
// }

//NestedIf loop

// the number is armstrong no.

// let num = 370;
// let a;
// let sum = 0;
// let n = num;

// while (n > 0) {
//     a = n % 10;
//     sum = sum + (a * a * a);
//     n = parseInt(n / 10);
// }

// console.log(sum);

// if (num == sum) {
    
//     console.log( " is armstrong no")
// } else {
//     console.log("not an armstrong no")
// }

// let num = 2503;
// let s;
// let sum = 0;
// let n = num;

//NestedFor loop

// for(let row = 1; row <= 100; row += 10){
//     for(let col = row; col < row + 10; col++){
//         if(row == 1){
//             document.write(col, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
//         }else{
//             document.write(col, "&nbsp;&nbsp;&nbsp;");
//         }
//     }
//     document.write("<br>");
    
// }

// for(let col = 1; col <= 100; col += 100){
//     for(let row = col; row <= col +10; row++){
//         if(col == 1){
//             document.write(row, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
//         }else{
//             document.write(row, "&nbsp;&nbsp;&nbsp;&nbsp;")
//         }
//     }
//     document.write("<br>");
    
// }

// for (let row = 1; row <= 100; row += 10) {
//     for (let col = row; col < row + 10; col++) {
//         document.write(col + "&nbsp;&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

// for (let row = 1; row <= 10; row++) {
//     for (let col = row; col <= 100; col += 10) {
//         document.write(col + "&nbsp;&nbsp;&nbsp;&nbsp;");
//     }
//     document.write("<br>");
// }

//nesterfor Ques

// let   n = 5;
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j + " ";
//   }
//   console.log(line.trim());
// }

let s = '*';
for(let i = '5x'; i<=s; i++){
    let space = " ";
    for(let q = '*'; q <= i; q++){
        space += q + " ";
    }
    console.log(line.trim());
}


