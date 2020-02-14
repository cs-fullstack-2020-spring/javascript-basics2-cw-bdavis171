//Question 1
let myName = "My name is: ";
let name = "Brandon Davis";
console.log(myName + name);

// !! Nice job on finding another way to convert strings to integers but be sure to use some of the methods that we teach in class as well
// Question 2
let balance = prompt("What is your balance?");
alert("You lost $10. Your new balance is: $"+(Number(balance)-10));

// Question 3
let grade = prompt("Enter your number grade");
let extra = prompt("Enter you extra credit");
alert("You grade total: " +(Number(grade)+(Number(extra))));

// Question 4
let balance1 = prompt("What is your balance?");
let deduction = prompt("How much do you want to deduct?");
alert("Your remaining balance is: " + (balance1-deduction));