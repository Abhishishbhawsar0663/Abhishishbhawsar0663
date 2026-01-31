//roadmap

// Basic JS
// Variable
// data-type
// Operators
// conditional statments (if | else | ele if | switch case)
// control flow statements (for, while, do-while, forEach, for in, for of)
//  Functions in JS
// Arrays | Objects | Strings
// Event Handling
// DOM - Document Object Model
// OOPS


// ad. JS
// Rest and Spread Operators
// Template literal Object
// API's 
// Promises | Aysnc & Sync JS
// Fetch Method 
// Async | Await
// Error Handling - Try & Catch



// prompt - user input lene ke liye
// confirm - user se confirmation ke liye 
// alert - to display some message or warning on to the browser

use - input - prompt
//to type cast the user input - Number, parseInt, parseFloat
let userInput = Number(prompt("Enter a number : "));
console.log(userInput);
console.log(typeof(userInput));


// Variable in JS -
// they are like containers which will store some amount of data or value
// entity which is able to change anytime or anywhere

// declaration of variable in JS -
// 1. Declaration basis -
// var   -
// var num = 458;
// // document.write(num)
// console.log(num);
// var num = 54;
// console.log(num);

// // let   -
// let num1 = 98;
// console.log(num1);
// // let num1 = 62;
// // console.log(num1);

// // const -
// const num2 = 45;
// console.log(num2);
// // const num2 = 85;
// // console.log(num2);

// Data-Types in JS -

// let num = undefined;
// console.log(num);
// console.log(typeof(num));

// typeof(Arr)ays in JS -
// let arr = [10,20,303,40,50,60];
// console.log(arr);
// console.log(typeof(arr));

// objects in js -
// let empObj = {
//     empName: "Nandini",
//     empAge: 18,
//     empSalary: 120000
// };
// console.log(empObj);
// console.log(typeof(empObj));

// let count = 178;
// console.log(count);
// let copiedCount = count;
// console.log(copiedCount);
// copiedCount = copiedCount + 10;
// console.log(copiedCount);
// console.log(count);

// let arr = [10,20,30,40];
// // console.log(arr);
// let copiedArr = arr;
// // console.log(arr);
// copiedArr.pop();
// console.log(copiedArr)
// console.log(arr)

// Operators -
// 1. Airthmatic - +, -, *, /, %, **

// let num1 = 10;
// let num2 = 58;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num1);

// 2. Assignment Operators - +=, -=, *=, /=, ++, --, %=, **=

// let num1 = 5
// let num2 = 10
// console.log("before assignment - " + num1);
// console.log("before assignment - " + num2);

// // num1 += num2;   // num1 = num1 + num2
// num2 += num1;   // num2 = num2 + num1
// console.log("after assignment - " + num1);
// console.log("after assignment - " + num2);

// Comparison Operators -   <, >, <=, >=, ==, ===, !=, !==
// let num1 = '45';
// let num2 = 45;

// console.log(num1 == num2);
// console.log(num1 === num2);

// console.log(num1 > num2);
// console.log(num2 > num1);
// console.log(num2 >= num1);
// console.log(num2 > num1);
// console.log(num1 <= num2);
// console.log(num2 < num1);
// console.log(num1 == num2);
// console.log(num1 === num2);
// console.log(num1 != num2);
// console.log(num1 !== num2);

// Logical Operators -
// AND - &&
// OR  - ||
// NOT - !

// let num1 = 101;
// let num2 = 20.254896;
// let num3 = 30;

// if(!(num1 > num2 && num1 > num3)){
//     console.log("Num1 is greater!");
// }
// else if(num2 > num1 && num2 > num3){
//     console.log("Num2 is greater!");
// }
// else if(num3 > num1 && num3 > num2){
//     console.log("Num3 is greater!");
// }
// else{
//     console.log("All Number are Equal!");
// }

// nested if -
// let num1 = 10;
// let num2 = 2;
// let num3 = 30;
// let num4 = 14;

// if(num1 < num2 && num1 < num3 && num1 < num4){
//     if(num2 < num3 && num2 < num4){
//         if(num3 < num4){
//             console.log("num1, num2, num3, num4");
//         }else{
//             console.log("num1, num2, num4, num3");
//         }
//     }
//     else if(num3 < num4 && num3 < num2){
//         if(num2 < num4){
//             console.log("num1, num3, num2, num4");
//         }else{
//             console.log("num1, num3, num4, num2");
//         }
//     }
//     else {
//         if(num2 < num3){
//             console.log("num1, num4, num2, num3");
//         }else{
//             console.log("num1, num4, num3, num2");
//         }
//     }
// }
// else if(num2 < num1 && num2 < num3 && num2 < num4){
//     if(num1 < num3 && num1 < num4){
//         if(num3 < num4){
//             console.log("num2, num1, num3, num4");
//         }else{
//             console.log("num2, num1, num4, num3");
//         }
//     }
//     else if(num3 < num4 && num3 < num1){
//         if(num1 < num4){
//             console.log("num2, num3, num1, num4");
//         }else{
//             console.log("num2, num3, num4, num1");
//         }
//     }
//     else {
//         if(num1 < num3){
//             console.log("num2, num4, num1, num3");
//         }else{
//             console.log("num2, num4, num3, num1");
//         }
//     }
// }
// else if(num3 < num1 && num2 > num3 && num3 < num4){
//     if(num1 < num2 && num1 < num4){
//         if(num2 < num4){
//             console.log("num3, num1, num2, num4");
//         }else{
//             console.log("num3, num1, num4, num2");
//         }
//     }
//     else if(num2 < num4 && num2 < num1){
//         if(num1 < num4){
//             console.log("num3, num2, num1, num4");
//         }else{
//             console.log("num3, num2, num4, num1");
//         }
//     }
//     else {
//         if(num1 < num2){
//             console.log("num3, num4, num1, num2");
//         }else{
//             console.log("num3, num4, num2, num1");
//         }
//     }
// }
// else{
//     if(num1 < num2 && num1 < num3){
//         if(num2 < num3){
//             console.log("num4, num1, num2, num3");
//         }else{
//             console.log("num4, num1, num3, num2");
//         }
//     }
//     else if(num2 < num3 && num2 < num1){
//         if(num1 < num3){
//             console.log("num4, num2, num1, num3");
//         }else{
//             console.log("num4, num2, num3, num1");
//         }
//     }
//     else {
//         if(num1 < num2){
//             console.log("num4, num3, num1, num2");
//         }else{
//             console.log("num4, num3, num2, num1");
//         }
//     }
// }

// Dialogue Boxes -
// prompt - user input lene ke liye
// confirm - user se confirmation ke liye
// alert - to display some message or warning on to the browser

// user input - prompt -
// to type cast the user input - Number, parseInt, parseFloat
// let userInput = Number(prompt("Enter a number : "));
// console.log(userInput);
// console.log(typeof(userInput));

// /confirmation ke liye - confirm box -
// let userConf = confirm("wants to sent you a notification!");
// console.log(userConf);

// if(userConf){
//     alert("you got a new notification!");
// }else{
//     alert("thanks, for the feedback!");
// }

// Switch Case -
// let day = 'sunday';

// switch(day){
//     case 'sunday':
//         console.log("today is sunday!");
//         break;
//     case 'monday':
//         console.log("today is monday!");
//         break;
//     case 'tuesday':
//         console.log("today is tuesday!");
//         break;
//     case 'wednesday':
//         console.log("today is wednesday!");
//         break;
//     case 'thursday':
//         console.log("today is thursday!");
//         break;
//     case 'friday':
//         console.log("today is friday!");
//         break;
//     case 'saturday':
//         console.log("today is saturday!");
//         break;
//     default:
//         console.log("Invalid Day!")
// }

// control-flow statements -
// while -
// do-while
// for

// 1. while -
// let num = 1;
//  while(num <= 10){
//     console.log(num);
//     num++;
//  }

// do-while -

// let num = 1;
// do{
//     console.log(num);
//     num++;
// }while(num < 11)

// for -

// for(let num = 1; num < 11; num++){
//     console.log(num);
// }

// function -

// function funcName(){   // declaration of function

// }

// funcName();    // function calling

// let num1 = 96;
// let num2 = 14;
// let result = num1 + num2;
// console.log(result);.

// Standard Fucntion -
// function sum(){
//     let num1 = 36;
//     let num2 = 145;
//     let result = num1 + num2;
//     console.log(result);
// }

// sum();
// sum();
// sum();
// sum();
// sum();
// sum();
// sum();

// parametric function -
// function sum(num1, num2){
//     let result = num1 + num2;
//     console.log(result);
// }

// sum(154, 254);
// sum(47, 52);
// sum(12, 14);
// sum(74, 52);
// sum(0, 0);

// function funcName(para1, para2, ....paraN){
//     let result = para1 + para2 + ... + paraN;
//     return result;
// }

// let student_name = 'Anas';
// let mMarks = 58;
// let enMarks = 85;
// let hnMarks = 18;
// let sstMarks = 68;
// let scMarks = 75;

// function obtMarks(mMarks, hnMakrs, enMarks, sstMarks, scMarks) {
//   let obtMarks = mMarks + hnMakrs + enMarks + sstMarks + scMarks;
//   return obtMarks;
// }

// let obMarks = obtMarks(50,50,50,50,50);

// function percentage(obtMarks, tMarks){
//     let percent = (obtMarks / tMarks) * 100;
//     return percent;
// }

// let  stdPer = percentage(obMarks, 500);

// function result(stdName, obtMarks, tMarks, percentage){
//     if(percentage > 80 && percentage <= 100){
//         console.log(`${stdName} has got ${obtMarks} out of ${tMarks}, scored ${percentage}% and got 'A' Grade`);
//     }
//     else if(percentage > 60 && percentage <= 80){
//         console.log(`${stdName} has got ${obtMarks} out of ${tMarks}, scored ${percentage}% and got 'B' Grade`);
//     }
//     else if(percentage > 40 && percentage <= 60){
//         console.log(`${stdName} has got ${obtMarks} out of ${tMarks}, scored ${percentage}% and got 'C' Grade`);
//     }
//     else if(percentage >= 33 && percentage <= 40){
//         console.log(`${stdName} has got ${obtMarks} out of ${tMarks}, scored ${percentage}% and got 'D' Grade`);
//     }
//     else{
//         console.log(`${stdName} has got ${obtMarks} out of ${tMarks}, scored ${percentage}% and unfortunately got failed! better luck next time!`);
//     }
// }

// result(student_name, obMarks, 500, stdPer);

// Array -
// let arr = [10,20,30,540,60,75];
// console.log(arr);

// console.log(typeof(arr));
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// for(let i = 0; i <= arr.length - 1; i++){
//     console.log(arr[i]);
// }

// for(let i = 0; arr[i] == undefined; i++){
//     console.log(arr[i]);
// }

// let obj = {
//     perName: "Mahipal",
//     perAge: 150,
//     perDOB: "01/01/2001",
//     print: function(){
//         console.log(`${this.perName}`);
//     }
// }

// Traditional method to iterate an object -
// console.log(obj[Object.keys(obj)[2]]);
// for(let key = 0; key < Object.keys(obj).length; key++){
//     console.log(Object.keys(obj)[key] + " : " + obj[Object.keys(obj)[key]]);
// }

// // Modern For Loop -
// for(let objKiKey in obj){
//     console.log(`${objKiKey} : ${obj[objKiKey]}`);
// }

// console.log(objectName.key);
// console.log(obj.perName);
// console.log(obj.perAge);
// console.log(obj.perDOB);

// obj.print();

// for(let key in obj){
//     console.log(obj[key]);
// }

// Array Methods -
// let arr = [10,20,50,80,75,60];
// console.log(arr);
// console.log(typeof(arr));

// // 1. Sort :

// var arr = ["amrit","arpit","Neha","sita","Pramod","isha"];
// // let arr = [1,4,1,52,6,3,9,5,8,96,2];
// document.write(arr + "<br><br>");
// arr.sort();
// document.write(arr + "<br>");

// // 2. sort :.reverse()

// let ary = ["arpit", "sakshi", "titu", 10];
// document.write(ary +"<br><br>")
// ary.reverse();
// // ary.sort().reverse();
// document.write(ary);

// // 3. Pop :

// var arr = ["arpit", "shikha", "aman", "priya"];
// document.write(arr +"<br><br>");
// arr.pop();
// document.write(arr);

// // 4. Push :

// var arr = ["arpit", "shikha", "aman", "priya"];
// console.log(arr, "<br><br>");
// arr.push(["rahul", 'Subodh']);
// console.log(arr);

// // 5. shift :

// var arr = ["arpit", "shikha", "aman", "priya"];
// document.write(arr, "<br><br>");
// arr.shift();
// arr.shift();
// document.write(arr);

// // 6. unShift :

// var arr = ["arpit", "shikha", "aman", "priya"];
// document.write(arr, "<br><br>");
// arr.unshift("shalini", "shobha");
// document.write(arr);

// 7. concat :
// var a = [10,20,"Rahul"];
// document.write(a +"<br><br>");
// console.log(a);
// var b = a.concat("sanjay",10,50);
// console.log(b);
// document.write(b);
// let c = a.concat(b);
// console.log(c);
// let e = a.concat(a, b, c);
// console.log(e);

// // 8. Join :

// var a = [10,50,"Rahul","shikha"];
// // var b = ["shobha", "geeta", "sita"];
// var c = a.join("-");
// document.write(c);

// // 10. slice :

// var h = [10, 20, 45, 30, 40];
// document.write(h +"<br><br>");
// var b = h.slice(1, 4);
// b.pop();
// document.write(b +"<br><br>");
// document.write(h);

// // 11. Splice :

// var a = ["Rahul", 50, 80, 95, 60];
// document.write(a +"<br><br>");
// // var c = a.splice(index, how many delete, new value);
// a.splice(3, 1, "Aman", 10);
// document.write(a + "<br><br><br>");

// // 12. isArray :

// var arr = [10, 50 ,40 ,"Sahil"];
// if(Array.isArray(arr)){
//     document.write("Yess, this is an array.")
// }else
// {
//     document.write("No, This not an array")
// }

// // 13. indexOf :

// var b = [10, 20, 45, 30, 20, 45, 54, 45];
// var a = b.indexOf(20, 10);
// document.write(a);
// var a = b.indexOf(search  , start);

// // 14. lastIndexOf :

// var g = ["Str", 30, 50, 45, 50, 45, 50,true];
// var h = g.lastIndexOf(50); // g.lastIndexOf(seacrh item)
// document.write(h);

// // 15. Includes :

// var ary = ["Sagar", "Atul", "Sanjay"];
// var h = ary.includes("Atul");
// document.write(h + "<br><br><br><br>");

// // 16. Some :
// var age = [10, 50, 18];
// document.write(age + "<br><br>");
// var check = age.some((age) => {
//     return age >= 18;
// });
// var check = age.some(function (age){
//     return age >= 18;
// });
// document.write(check + "<br><br>");

// Fat-Arrow-Fuction (Function Expression)
// let ages = (age) => {
//     return age >= 18;
// }

function ages(age) {
  return age >= 18;
}

// Anonymous function -
// function (para){
//     console.log(para);
// }

// // 17. Every :

// var k = [20, 50, 80];
// document.write(k + "<br><br><br>");
// var y = k.every(ages);
// document.write(y);

// // 18. Find :
// var p = [10, 22, 55, 19, 50];
// document.write(p + "<br><br><br>");
// var l = p.find(ages);
// document.write(l);

// function ages(p){
//     return p >= 20;
// }

// 19. FindIndex :
// let q = [10, 15, 18, 50];
// document.write(q + "<br><br><br>");
// var r = q.findIndex(ages);
// document.write(r);

// function ages(q){
//     return q >= 18;
// }

// // 20. Filter :

// var a = [10,12,15,20,45,5,70];
// document.write(a + "<br><br>");
// var b = a.filter(ages);
// document.write(b + "<br>");

// function ages(a){
//     return a >= 18;
// }

// // 21. toString :

// var t = ["Rahul", 50, 48, "Sanjeev"];
// console.log(t);
// document.write(t + "<br><br><br>")
// var str = t.toString();
// document.write(str);
// console.log(typeof(str));

// // 22. Array forEach Loop :

// let ary = ["Neha", 50, true, "Saddam"];
// ary.forEach(function(val, i){
//     document.write(i + " : " + val + "<br>");
// })

// for(let i = 0; i < ary.length; i++){
//     document.write( i + "-" + ary[i] + "<br>");
// }

// 23. map() :
// let arr = [10,20,30,40,50,60];
// let a = arr.forEach((val, ind) => {
//     return val + 10
// })

// let b = arr.map((val, ind) => {
//     return val + 10;
// })

// console.log(a);
// console.log(b);

// 23 .reduce() :

// let arr = [1,2,3,4,5,6,7,9,9,3,1,4,86,10];

// let sin_res = arr.reduce((acc,curr) => {
//     return acc + curr;
// })

// console.log(sin_res);

// String Methods -
// // 1. Length :
// let str = "This is a JavaScript Tutorial.";
// let l = str.length;
// document.write(l + "<br><br>");

// // 2. toLowerCase :
// let str = "Let's See the SECOND String Method";
// document.write(str + "<br><br>");
// let l = str.toLowerCase();
// document.write(l + "<br><br>");

// // 3. toUpperCase :
// var str = "let's see the third string method";
// document.write(str + "<br>");
// var u = str.toUpperCase();
// document.write(u + "<br>");

// // 4. includes :
// var str = "let's see the fourth string method";
// var i = str.includes("let's see");
// document.write(i + "<br>");

// // 5. startsWith :
// var str = "let's see the fifth string method";
// var i = str.startsWith("fifth");
// document.write(i + "<br>");

// // 6. endsWith :
// var str = "let's see the sixth string method!";
// var i = str.endsWith("!");
// document.write(i + "<br>");

// // 7. search :
// var str = "let's see the sixth string method";
// var i = str.search("s");
// document.write(i + "<br>");

// // 8. match :
// let str = "let's see the see eigth see string see method";
// // let i = str.match("t");
// let i = str.match(/Nandini/g);
// document.write(i + "<br>");
// document.write(typeof(i));

// // 9. indexOf :
// var str = "let's see the ninth string method";
// var i = str.indexOf("s", 5);
// document.write(i + "<br>");

// // 10. lastIndexOf :
// var str = "let's see the ninth string method";
// var i = str.lastIndexOf("h", 29);
// document.write(i + "<br>");

// // 11. replace :
// var str = "let's see the ninth see string see method see";
// document.write(str + "<br>");
// // var i = str.replace("see", "move"); // (// can be used for more then one replace)
// var i = str.replace(/see/g, "move"); // (// can be used for more then one replace)
// document.write(i + "<br>");

// // 12. trim :
// var str = "      Hello       Students";
// document.write(str);
// console.log(str);
// document.write(str);
// var a = str.trim();
// console.log(a);

// // 13. charAt :
// var str = "let's see the ninth string method";
// var i = str.charAt(12); // (// can be used for more then one replace)
// document.write(i + "<br>");

// // 14. charCodeAt :
// var str = "let's see the ninth string method";
// var i = str.charCodeAt(12);
// document.write(i + "<br>");

// str = String.fromCharCode(90);
// document.write(str);

// 15. concat  :
// var str = "I'm a student";
// var s = " and i belong to Indore";
// var a = str.concat(s);
// document.write(a + "<br>");

// // 16. split :
// var str = "JavaScript is a intresting language";
// var a = str.split("");
// document.write(a + "<br>");

// // 17. repeat :
// var str = "JavaScript is a intresting language";
// var a = str.repeat(3);
// document.write(a + "<br>");

// // 18. slice :
// var str = "JavaScript is a intresting language";
// // var a = str.slice(10);
// var a = str.slice(10, 20);
// document.write(a + "<br>");

// // 19. substr :
// var str = "JavaScript is a intresting language";
// var a = str.substr(3,24);
// document.write(a + "<br>");

// // // 20. substring :
// var str = "JavaScript is a intresting language";
// var a = str.substring(3,24);
// document.write(a + "<br>");

// // 21. toString :
// var st = 25014;
// var str = st.toString();
// document.write(str + "<br>");
// document.write(typeof(str));

// DOM - Document Object Model

// let divEle = document.getElementsByTagName("div");
// console.log(divEle);
// // console.log(divEle[0]);

// let divEle = document.getElementsByClassName("container");
// console.log(divEle);
// console.log(divEle[0]);

// let domEle = document.getElementById("cont1");
// console.log(domEle);

// querySelector & querySelectorAll

// let single_ele = document.querySelector("div");
// let coll_ele = document.querySelectorAll("div");
// console.log(single_ele);
// console.log(coll_ele);

// let class_ele = document.querySelector(".container");
// let coll_class_ele = document.querySelectorAll(".container");
// console.log(class_ele);
// console.log(coll_class_ele);

// let id_ele = document.querySelector("#cont1");
// let coll_id_ele = document.querySelectorAll("#cont1");
// console.log(id_ele);
// console.log(coll_id_ele);

// Event Handling -

function show_message() {
  alert("Hello From JavaScript!");
}

function showMessage() {
  let confirmation = confirm("Really wants to see message?");
  if (confirmation) {
    console.log("Hello From JavaScript");
  } else {
    console.log("you're not allowed to check messages");
  }
}

let button_ele = document.getElementById("btn");

// button_ele.addEventListener("click", show_message);

// button_ele.addEventListener("click", function(){
//     console.log("Hello, I am Anonymous Function!");
// });

// button_ele.addEventListener("click", () => {
//     document.write("Function fired!");
// });

// button_ele.addEventListener("dblclick", () => {
//     document.write("Function fired!");
// });

// button_ele.addEventListener("contextmenu", () => {
//     document.write("Function fired!");
// });

// button_ele.addEventListener("mouseenter", () => {
//     document.write("Function fired!");
// });

// button_ele.addEventListener("mouseout", () => {
//     document.write("Function fired!");
// });

// button_ele.addEventListener("keypress", () => {
//     document.write("Function fired!");
// });

// button_ele.addEventListener("keydown", () => {
//     document.write("Function fired!");
// });

// button_ele.addEventListener("keyup", () => {
//     document.write("Function fired!");
// });

// let theme = true;

// button_ele.addEventListener("click", () => {
//     if(theme){
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//         theme = !theme;
//     }else{
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//         theme = !theme;
//     }
// })

// get methods -
// innerText | textContent
// innerHTML
// getAttribute
// attributes
// getAttributeNode

// let btn = document.getElementById("btn");
// let btn = document.querySelector("#btn");

// let btn_text = btn.innerText;
// let btn_text = btn.textContent;
// let btn_text = btn.innerHTML;
// console.log(btn_text);

// let btn_id_attr = btn.getAttribute("id");
// console.log(btn_id_attr);
// let btn_id_attr = btn.getAttribute("class");
// console.log(btn_id_attr);
// let btn_id_attr = btn.getAttribute("onclick");
// console.log(btn_id_attr);

// let attr_arr = btn.attributes;
// console.log(attr_arr);

// set methods -
// innerText | textContent
// innerHTML
// setAttribute
// removeAttribute

// console.log(btn);
// btn.innerText = "Change BG";

// console.log(btn);

// btn.innerHTML = "<i>change <b>background</b> color</i>";

// let attr = btn.getAttribute("onclick");
// console.log(attr);
// btn.innerHTML = "<i>change <u>background</u> color</i>";
// btn.setAttribute("onclick", "showMessage()");

// btn.removeAttribute("onclick");

// btn.setAttribute("class", "container");
// let ele = document.querySelectorAll("div");

// btn.addEventListener("click", () => {
//     ele[0].setAttribute("class", "container");
//     ele[1].setAttribute("class", "container");
//     btn.setAttribute("style", "background-color: black; padding: 10px; margin: 20px 0 20px 0; transform: translateX(100px); color: orange; border: 1px solid darkcyan; border-radius: 5px;")
// })

// DOM Styling Methods - style | classList | className

// btn.style.border = "1px solid black";
// btn.style.borderRadius = "50px";
// btn.style.backgroundColor = "beige";
// btn.style.padding = "10px";
// btn.style.margin = "20px";
// btn.style.transform = "translate(400px, 0)";

// // style using classList
// let h1Ele = document.getElementById("headEle");

// console.log(h1Ele);

// let headEleClassList = h1Ele.classList;
// btn.addEventListener("click", () => {
//     headEleClassList.toggle("cont3");
// })

// btn.addEventListener("click",() => {
//     if(headEleClassList.contains("cont3")){
//         headEleClassList.remove("cont3");
//     }else{
//         headEleClassList.add("cont3");
//     }
// })

// btn.addEventListener("dblclick", () => {
//     let headEleClassList = h1Ele.classList;
//     headEleClassList.remove("cont3");
// })

// btn.addEventListener("click", () => {
//     let headEleClassList = h1Ele.classList;
//     headEleClassList.add("cont3");
// })




// style using className -

// let h1Classes = h1Ele.className;
// console.log(h1Classes);
// btn.addEventListener("click", () => {
//     console.log("event triggered!");
//     h1Ele.className = "cont1 cont2";
// })





// Ad Traversal Methods - 

// let cont1 = document.querySelector(".cont1");
// console.log(cont1);
// console.log(cont1.children)
// console.log(cont1.firstElementChild);
// console.log(cont1.lastElementChild.firstElementChild);

// console.log(cont1.firstElementChild.nextElementSibling)
// console.log(cont1.lastElementChild.previousElementSibling);

// let spanEle = cont1.firstElementChild.nextElementSibling.firstElementChild;
// console.log(spanEle);

// console.log(spanEle.parentElement.parentElement.parentElement)



// Creating elements usins JS DOM Manipulation -
// creating an h1 element in our HTML

// let h1Ele = document.createElement("h1");
// console.log(h1Ele);
// let cont1 = document.querySelector(".cont1");

// // append method element ki aakhri me (last me) append karega element ko
// h1Ele.innerHTML = "H1 Element Created by JS DOM";
// document.body.append(h1Ele);

// insertBefore method element ke kisi bhi nested element se pehele insert karega element ko
// cont2.append(h1Ele);
// document.querySelector(".parent").insertBefore(h1Ele, cont1);






// Advance JavaScript - 
// REST & SPREAD operators - 
// Ternary Operators -

// let ary = [1,2,3,4,5,6,7,8,9,10,20,50,30,90,90,50,20,1,8,20,80,30,90,2,20,545];
// function arrIt(...arr){
//   arr.forEach((val, ind) => {
//     // console.log(`${ind} : ${val}`);
//     // console.log(arr);
//     // val < 60? console.log("yes the value is lesser than 60") : console.log("No, the value is greater than 60")
//     console.log(`${val} - ${val < 60? "yes, it is lesser!" : "no, it is greater!"}`);



//     // defualt conditional statement -
//     // if(val < 60){
//     //   console.log(val);
//     // }
//   })
// }

// arrIt(10,20,30,60,20,10,40,50,20,80,20,2,75);
// arrIt(...[10,20,30,60,20,10,40,50,20,80,20,2,75]);





// Promises in JS - 

// let promState = true;
// let prom = new Promise((res, rej) => {
//   if(promState){
//     res("Promises Fullfilled ho giya bhiya!");
//   }else{
//     rej("Promises Reject ho gya bhiya!");
//   }
// });

// prom.then((output) => {
//   console.log(output);
// }).catch((errorMessage) => {
//   console.log(errorMessage);
// })

// prom.then((result) => {
//   console.log(result);
// })

// prom.catch((error) => {
//   console.log(error);
// })

// console.log(typeof(prom));








// Fetch API - 


// const API_URL = "https://jsonplaceholder.typicode.com/users";

// fetch(API_ROUTE, NETWORK_OBJECT);

// console.log(fetch(API_URL).then((res) => {
//   console.log(res.json());
// }));

// fetch(API_URL).then((response) => {
//   return response.json();
// }).then((data) => {
//   data.forEach((user) => {
//     let tdData1 = user.name;
//     let tdData2 = user.username;
//     let tdData3 = user.email;

//     let trEle = document.createElement("tr");
//     let tdEle1 = document.createElement("td");
//     let tdEle2 = document.createElement("td");
//     let tdEle3 = document.createElement("td");
//     let tBody = document.querySelector("#table_body");

//     tdEle1.textContent = tdData1;
//     tdEle2.textContent = tdData2;
//     tdEle3.textContent = tdData3;

//     trEle.append(tdEle1);
//     trEle.append(tdEle2);
//     trEle.append(tdEle3);

//     tBody.append(trEle);
//   });
// })





// Fetch part - 2 (The Revenge) -
// let dataToBePosted = {
//   userId: 201,
//   title: "Master JavaScript in 15 days",
//   completed: "In Progess"
// }

const API_Route = "https://jsonplaceholder.typicode.com/todos";

// fetch(API_Route, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json" // "application/x-www-form-urlencoded"
//   },
//   body: JSON.stringify(dataToBePosted)
// })
// .then((response) => {
//   return response.json();
// })
// .then((todos) => {
//   console.log(todos);
// })
// .catch((err) => {
//   console.log(err);
// });

// CRUD - 
// C - Creating Data
// R - Reading Data
// U - Updating Data
// D - Deleting Data




// Async and Await - 

let btn = document.querySelector("#fetch_btn");


// btn.addEventListener("click", () => {
//   let data = fetch(API_Route)
//   .then((response) => {
//     return response.json();
//   }).then((data) => {
//     console.log(data);
//   });
// });


btn.addEventListener("click", async () => {
  try{
    // jo kuch bhi karwana hai, yahan karwa lijiye try bilok me!
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    console.log(data);
    //  ab karta jo bhi karya sampann karna chahta wo yaha se kar sakta hai!
  }catch(err){
    // jo koi bhi mai ka laal error aayegi usko hum handle karenge kaha???????
    // wahi.....jahan koi aata jata nahi!
    // that means - 
    console.log(err);
  }
})



// Try and Catch Block - used to handle the errors ()