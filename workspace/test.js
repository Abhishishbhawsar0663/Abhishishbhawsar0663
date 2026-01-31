/////////////Conditional Statement problem////////////////

//Number is positive, negative, or zero
// let num =10;

// if (num > 0) {
//     console.log("Number is positive.");
// } else if (num < 0) {
//     console.log("Number is negative.");
// } else {
//     console.log("Number is zero.");
// }

//Number is even or odd
// let num1 = 0;

// if (num % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// //Given year is a leap year or not
// let year = Number("2020");

// if ((year % 4 === 0 && year % 100  !== 0) || (year % 400 === 0)) {
//     console.log("year is a leap year.");
// } else {
//     console.log("Year is not a leap year.");
// }

// Greatest of two numbers entered by the user
let num1 = 35;
let num2 = 15;

if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else if (num2 > num1) {
    console.log(num2 + " is greater than " + num1);
} else {
    console.log("Both numbers are equal.");
}

//Find the greatest among three numbers entered by the user
// let num1 = 25;
// let num2 = 40;
// let num3 = 15;

// if (num1 >= num2 && num1 >= num3) {
//     console.log(num1 + " is the greatest number.");
// } else if (num2 >= num1 && num2 >= num3) {
//     console.log(num2 + " is the greatest number.");
// } else {
//     console.log(num3 + " is the greatest number.");
// }

//Checks whether a given number is divisible by 5 or not
// let num = 45;

// if (num % 5 === 0) {
//     console.log(num + " is divisible by 5.");
// } else {
//     console.log(num + " is not divisible by 5.");
// }

// Check whether a character is a vowel or consonant
// let ch = 'a';

// if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
//     ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U') {
//     console.log(ch + " is a vowel.");
// } else {
//     console.log(ch + " is a consonant.");
// }

// Check whether a student has passed or failed (Passing marks = 40)
// let marks = 65;

// if (marks >= 40) {
//     console.log("Student has passed.");
// } else {
//     console.log("Student has failed.");
// }

// Check whether a number is within the range 10 to 50
// let num = 25;

// if (num >= 10 && num <= 50) {
//     console.log(num + " is within the range 10 to 50.");
// } else {
//     console.log(num + " is outside the range 10 to 50.");
// }

// Check if a number is multiple of 3, multiple of 7, or neither
// let number = 21;

// if (number % 3 === 0 && number % 7 === 0) {
//     console.log(number + " is a multiple of both 3 and 7.");
// } else if (number % 3 === 0) {
//     console.log(number + " is a multiple of 3.");
// } else if (number % 7 === 0) {
//     console.log(number + " is a multiple of 7.");
// } else {
//     console.log(number + " is neither a multiple of 3 nor 7.");
// }

///////Real-life Based Questions///////////

//Discount eligibility (10% discount if amount > 500)
// let amount = 750;

// if (amount > 500) {
//     console.log("Discount applied: 10%");
// } else {
//     console.log("No discount available.");
// }

//Voting eligibility
// let age = 20;

// if (age >= 18 || age == 18) {
//     console.log("Eligible to vote.");
// } else {
//     console.log("Not eligible to vote.");
// }

//Traffic light action
// let light = "Green";

// if (light === "Red") {
//     console.log("Stop");
// } else if (light === "Yellow") {
//     console.log("Wait");
// } else if (light === "Green") {
//     console.log("Go");
// } else {
//     console.log("Invalid light color");
// }

// //Student grade based on marks
// let marks = 82;

// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 75) {
//     console.log("Grade B");
// } else if (marks >= 50) {
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }

//Age category
// let personAge = 45;

// if (personAge >= 0 && personAge <= 12) {
//     console.log("Child");
// } else if (personAge >= 13 && personAge <= 19) {
//     console.log("Teen");
// } else if (personAge >= 20 && personAge <= 59) {
//     console.log("Adult");
// } else {
//     console.log("Senior Citizen");
// }

//Cinema ticket price
// let customerAge = 65;
// let ticketPrice;

// if (customerAge < 12) {
//     ticketPrice = 100;
// } else if (customerAge > 60) {
//     ticketPrice = 150;
// } else {
//     ticketPrice = 200;
// }

// console.log("Ticket Price: " + ticketPrice);

//Employee bonus calculation
// let experience = 6;
// let bonus;

// if (experience >= 5) {
//     bonus = 10000;
// } else {
//     bonus = 5000;
// }

// console.log("Bonus Amount: " + bonus);

// //Weather condition
// let temp = 30;

// if (temp < 0) {
//     console.log("Freezing Weather");
// } else if (temp >= 0 && temp <= 20) {
//     console.log("Cold Weather");
// } else if (temp >= 21 && temp <= 35) {
//     console.log("Normal Weather");
// } else {
//     console.log("Hot Weather");
// }

//ATM withdrawal check
// let balance = 5000;
// let withdraw = 3000;

// if (withdraw <= balance) {
//     console.log("Withdrawal successful");
// } else {
//     console.log("Insufficient Balance");
// }

//Scholarship eligibility
// let studentMarks = 88;

// if (studentMarks >= 85) {
//     console.log("Scholarship granted");
// } else {
//     console.log("No scholarship");
// }
