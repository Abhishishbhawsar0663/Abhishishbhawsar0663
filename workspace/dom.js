// Creating elements usins JS DOM Manipulation -

let h1Ele = document.createElement("h1");
console.log(h1Ele);
let cont1 = document.querySelector(".cont1");

h1Ele.innerHTML = "H1 Element Created by JS DOM";
document.body.append(h1Ele);

cont1.append(h1Ele);
document.querySelector(".parent").insertBefore(h1Ele, cont1);