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

// function show_message(){
//     alert("Hello From JavaScript!");
// }

// let button_ele = document.getElementById("btn");


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