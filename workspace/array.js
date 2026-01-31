//arr

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

// Array Methods - 
// let arr = [10,20,50,80,75,60];
// console.log(arr);
// console.log(typeof(arr));

//Methods of array

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

// function ages(age){
//     return age >= 18;
// }

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


// methods of string and others object

// for loop without using for in loop function


//want to create pure logic of all the methods
//SORT
var arr1 = [1, 4, 1, 52, 6, 3];

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1.length - 1; j++) {
        if (arr1[j] > arr1[j + 1]) {
            var temp = arr1[j];
            arr1[j] = arr1[j + 1];
            arr1[j + 1] = temp;
        }
    }
}
document.write("Sort: " + arr1 + "<br><br>");

//REVERSE
var arr2 = ["arpit", "sakshi", "titu", 10];
var l = 0;
var r = arr2.length - 1;

while (l < r) {
    var temp = arr2[l];
    arr2[l] = arr2[r];
    arr2[r] = temp;
    l++;
    r--;
}
document.write("Reverse: " + arr2 + "<br><br>");

//POP
var arr3 = ["arpit", "shikha", "aman", "priya"];
var popped = arr3[arr3.length - 1];
arr3.length = arr3.length - 1;
document.write("Pop: " + arr3 + "<br><br>");

//PUSH
var arr4 = ["arpit", "shikha", "aman"];
arr4[arr4.length] = "priya";
document.write("Push: " + arr4 + "<br><br>");

//SHIFT
var arr5 = ["arpit", "shikha", "aman", "priya"];
for (var i = 0; i < arr5.length - 1; i++) {
    arr5[i] = arr5[i + 1];
}
arr5.length = arr5.length - 1;
document.write("Shift: " + arr5 + "<br><br>");

//UNSHIFT
var arr6 = ["shikha", "aman", "priya"];
for (var i = arr6.length; i > 0; i--) {
    arr6[i] = arr6[i - 1];
}
arr6[0] = "arpit";
document.write("Unshift: " + arr6 + "<br><br>");

//CONCAT
var a1 = [10, 20, "Rahul"];
var a2 = ["Neha", 50];
var concatArr = [];

for (var i = 0; i < a1.length; i++) {
    concatArr[concatArr.length] = a1[i];
}
for (var j = 0; j < a2.length; j++) {
    concatArr[concatArr.length] = a2[j];
}
document.write("Concat: " + concatArr + "<br><br>");

//JOIN
var joinArr = [10, 50, "Rahul"];
var joined = "";
for (var i = 0; i < joinArr.length; i++) {
    joined += joinArr[i];
    if (i < joinArr.length - 1) joined += "-";
}
document.write("Join: " + joined + "<br><br>");

//SLICE
var sliceArr = [10, 20, 45, 30, 40];
var sliceResult = [];
for (var i = 1; i < 4; i++) {
    sliceResult[sliceResult.length] = sliceArr[i];
}
document.write("Slice: " + sliceResult + "<br><br>");

// SPLICE
var spliceArr = ["Rahul", 50, 80, 95, 60];
var index = 2;
var deleteCount = 2;

                    // delete
for (var i = index; i < spliceArr.length - deleteCount; i++) {
    spliceArr[i] = spliceArr[i + deleteCount];
}
spliceArr.length -= deleteCount;

                    //insert
for (var i = spliceArr.length; i > index; i--) {
    spliceArr[i] = spliceArr[i - 1];
}
spliceArr[index] = 100;

document.write("Splice: " + spliceArr + "<br><br>");

//INDEX OF
var indexArr = ["Str", 30, 50, 45];
var search = 50;
var foundIndex = -1;

for (var i = 0; i < indexArr.length; i++) {
    if (indexArr[i] === search) {
        foundIndex = i;
        break;
    }
}
document.write("IndexOf: " + foundIndex + "<br><br>");

//LAST INDEX OF
var lastArr = [10, 50, 20, 50];
var lastIndex = -1;

for (var i = lastArr.length - 1; i >= 0; i--) {
    if (lastArr[i] === 50) {
        lastIndex = i;
        break;
    }
}
document.write("LastIndexOf: " + lastIndex + "<br><br>");

//INCLUDES
var incArr = ["Sagar", "Atul", "Sanjay"];
var include = false;

for (var i = 0; i < incArr.length; i++) {
    if (incArr[i] === "Atul") {
        include = true;
        break;
    }
}
document.write("Includes: " + include + "<br><br>");

//SOME
var age = [10, 50, 18];
var some = false;

for (var i = 0; i < age.length; i++) {
    if (age[i] >= 18) {
        some = true;
        break;
    }
}
document.write("Some: " + some + "<br><br>");

//EVERY
var all = [20, 50, 80];
var every = true;

for (var i = 0; i < all.length; i++) {
    if (all[i] < 18) {
        every = false;
        break;
    }
}
document.write("Every: " + every + "<br><br>");

//FIND
var findArr = [10, 22, 55, 19, 50];
var found;

for (var i = 0; i < findArr.length; i++) {
    if (findArr[i] > 20) {
        found = findArr[i];
        break;
    }
}
document.write("Find: " + found + "<br><br>");

//FIND INDEX
var findIdxArr = [10, 15, 18, 50];
var findIdx = -1;

for (var i = 0; i < findIdxArr.length; i++) {
    if (findIdxArr[i] >= 18) {
        findIdx = i;
        break;
    }
}
document.write("FindIndex: " + findIdx + "<br><br>");

//FILTER
var filterArr = [10, 12, 15, 20, 45];
var filtered = [];

for (var i = 0; i < filterArr.length; i++) {
    if (filterArr[i] > 15) {
        filtered[filtered.length] = filterArr[i];
    }
}
document.write("Filter: " + filtered + "<br><br>");

//MAP
var mapArr = [10, 20, 30];
var mapped = [];

for (var i = 0; i < mapArr.length; i++) {
    mapped[i] = mapArr[i] * 2;
}
document.write("Map: " + mapped + "<br><br>");

//reduce
var arr = [1,2,3,4,5,6,7,9,9,3,1,4,86,10];

// step 1: accumulator ko first element se initialize karo
var accumulator = arr[0];

// step 2: loop second element se start hoga
for (var i = 1; i < arr.length; i++) {
    accumulator = accumulator + arr[i];
}
// final result
console.log(accumulator);

//pure logic
var arr = [1,2,3,4];
var accumulator = 10;   // initial value

for (var i = 0; i < arr.length; i++) {
    accumulator = accumulator + arr[i];
}

console.log(accumulator);
