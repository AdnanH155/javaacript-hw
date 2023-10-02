// 1 a
var myName = "Adnan";
console.log(myName);
// b
var num1 = 9;
console.log(num1);
// c
var isHappy = true;
var isSad = false;
console.log(isHappy), console.log(isSad);
// 2
var numOne = "50";
var numTwo = "40";
numOne = numOne * 1;
numTwo = numTwo * 1;
console.log(numOne + numTwo);
// 3
var myName = "Adnan";
var mySurname = "Hussain";
console.log(myName + mySurname);
// 4 and 5
var age = 24;
if (age >= 18) {
  console.log("You are an adult");
} else if (age >= 12) {
  console.log("You are a young teenager");
} else if (age >= 5) {
  console.log("You are a child");
}
// 6
var age = 15;
var ownsCar = true;
if (age >= 18 && ownsCar) {
  console.log(myName + "is old enough to own a car");
} else {
  console.log(myName + "can not own a car");
}

// 7
switch (name) {
  case "Adnan":
    console.log("Welcome back Adnan");
    break;

  case "Hussain":
    console.log("Welcome back Hussain");
    break;

  default:
    break;
}
// 8
var person = {
  name: "Adnan",
  age: 24,
  height: "187",
};
console.log(person);
// 9
for (var i = 0; i < 10; i++) {
  console.log("repeat message 10 times");
}
