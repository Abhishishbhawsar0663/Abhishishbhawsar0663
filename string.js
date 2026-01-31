//pure logic
//1. LENGTH
// // var str1 = "This is a JavaScript Tutorial.";
// // var len = 0;

// // while (str1[len] !== undefined) {
// //     len++;
// // }
// // document.write("Length: " + len + "<br><br>");

// //2. toLowerCase
// var str2 = "Let's See the SECOND String Method";
// var lower = "";

// for (var i = 0; str2[i] !== undefined; i++) {
//     var code = str2[i].charCodeAt(0);
//     if (code >= 65 && code <= 90) {
//         lower += String.fromCharCode(code + 32);
//     } else {
//         lower += str2[i];
//     }
// }
// document.write("LowerCase: " + lower + "<br><br>");

// //3. toUpperCase
// var str3 = "let's see the third string method";
// var upper = "";

// for (var i = 0; str3[i] !== undefined; i++) {
//     var code = str3[i].charCodeAt(0);
//     if (code >= 97 && code <= 122) {
//         upper += String.fromCharCode(code - 32);
//     } else {
//         upper += str3[i];
//     }
// }
// document.write("UpperCase: " + upper + "<br><br>");

//4. includes
// var str4 = "let's see the fourth string method";
// var search = "let's see";
// var found = false;

// for (var i = 0; str4[i] !== undefined; i++) {
//     var match = true;
//     for (var j = 0; search[j] !== undefined; j++) {
//         if (str4[i + j] !== search[j]) {
//             match = false;
//             break;
//         }
//     }
//     if (match) {
//         found = true;
//         break;
//     }
// }
// document.write("Includes: " + found + "<br><br>");

//5. startsWith
// var str5 = "let's see the fifth string method";
// var start = "let's";
// var starts = true;

// for (var i = 0; start[i] !== undefined; i++) {
//     if (str5[i] !== start[i]) {
//         starts = false;
//         break;
//     }
// }
// document.write("StartsWith: " + starts + "<br><br>");

//6. endsWith
// var str6 = "let's see the sixth string method!";
// var end = "!";
// var ends = true;

// var slen = 0;
// while (str6[slen] !== undefined) slen++;
// var elen = 0;
// while (end[elen] !== undefined) elen++;

// for (var i = 0; i < elen; i++) {
//     if (str6[slen - elen + i] !== end[i]) {
//         ends = false;
//         break;
//     }
// }
// document.write("EndsWith: " + ends + "<br><br>");

//7. search
// var str7 = "let's see the seventh string method";
// var ch = "s";
// var index = -1;

// for (var i = 0; str7[i] !== undefined; i++) {
//     if (str7[i] === ch) {
//         index = i;
//         break;
//     }
// }
// document.write("Search: " + index + "<br><br>");

//8. match (simple char match)
// var str8 = "let's see the see eigth see string see method";
// var matchArr = [];
// var pos = 0;

// for (var i = 0; str8[i] !== undefined; i++) {
//     if (str8[i] === "e") {
//         matchArr[pos++] = "e";
//     }
// }
// document.write("Match: " + matchArr + "<br><br>");

//9. indexOf
// var str9 = "let's see the ninth string method";
// var searchChar = "s";
// var idx = -1;

// for (var i = 0; str9[i] !== undefined; i++) {
//     if (str9[i] === searchChar) {
//         idx = i;
//         break;
//     }
// }
// document.write("IndexOf: " + idx + "<br><br>");

//10. lastIndexOf
// var str10 = "let's see the ninth string method";
// var last = -1;

// for (var i = 0; str10[i] !== undefined; i++) {
//     if (str10[i] === "h") {
//         last = i;
//     }
// }
// document.write("LastIndexOf: " + last + "<br><br>");

//11. replace (single word)
// var str11 = "let's see the ninth see string see method see";
// var replaceWord = "see";
// var newWord = "move";
// var replaced = "";

// for (var i = 0; str11[i] !== undefined; i++) {
//     var match = true;
//     for (var j = 0; replaceWord[j] !== undefined; j++) {
//         if (str11[i + j] !== replaceWord[j]) {
//             match = false;
//             break;
//         }
//     }
//     if (match) {
//         replaced += newWord;
//         i += j - 1;
//     } else {
//         replaced += str11[i];
//     }
// }
// document.write("Replace: " + replaced + "<br><br>");

//12. trim
// var str12 = "      Hello       Students      ";
// var start = 0;
// var end = 0;

// while (str12[start] === " ") start++;
// while (str12[end] !== undefined) end++;
// end--;

// while (str12[end] === " ") end--;

// var trimmed = "";
// for (var i = start; i <= end; i++) {
//     trimmed += str12[i];
// }
// document.write("Trim: " + trimmed + "<br><br>");

//13. charAt
// var str13 = "let's see the ninth string method";
// document.write("CharAt: " + str13[12] + "<br><br>");

// //14. charCodeAt
// var code = str13[12].charCodeAt(0);
// document.write("CharCodeAt: " + code + "<br><br>");

//15. concat
// var s1 = "I'm a student";
// var s2 = " and I belong to Indore";
// var concat = "";

// for (var i = 0; s1[i] !== undefined; i++) concat += s1[i];
// for (var j = 0; s2[j] !== undefined; j++) concat += s2[j];

// document.write("Concat: " + concat + "<br><br>");

//16. split
// var str16 = "JavaScript";
// var splitArr = [];
// var p = 0;

// for (var i = 0; str16[i] !== undefined; i++) {
//     splitArr[p++] = str16[i];
// }
// document.write("Split: " + splitArr + "<br><br>");

//17. repeat
// var str17 = "JS ";
// var repeat = "";
// var times = 3;

// for (var i = 0; i < times; i++) {
//     repeat += str17;
// }
// document.write("Repeat: " + repeat + "<br><br>");

//18. slice
// var str18 = "JavaScript is a interesting language";
// var slice = "";

// for (var i = 10; i < 20; i++) {
//     slice += str18[i];
// }
// document.write("Slice: " + slice + "<br><br>");

//19. substr
// var substr = "";
// var start = 3;
// var count = 24;

// for (var i = start; i < start + count; i++) {
//     substr += str18[i];
// }
// document.write("Substr: " + substr + "<br><br>");

//20. substring
// var substring = "";

// for (var i = 3; i < 24; i++) {
//     substring += str18[i];
// }
// document.write("Substring: " + substring + "<br><br>");

//21. toString
// var num = 25014;
// var strNum = "" + num;
// document.write("ToString: " + strNum + "<br>");
// document.write(typeof strNum);


//All method of strings
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

// //submit form
// enimation 
// message in 

// error occard

// enimation 
// message print not submited for 