//* Redeclaring a variable with var in a different scope or block changes the value of the outer variable as well
// var a = 5;
// console.log(a); //5

// {
//   var a = 3;
//   console.log(a); // 3
// }

// console.log(a); // 3

//*NOTE: Redeclaring a variable with let in a different scope or block treats that variable as a different variable

// And the value of a variable outside doesnot change

// let b = 5;
// console.log(b); // 5

// {
//   let b = 3;
//   console.log(b); //3
// }

// console.log(b); // 5

//* ALLOWED
// var x = 25;
// var x = 36;
// console.log(x);

//* NOT ALLOWED
// let q = 1;
// let q = 2; - a is already declared

var b = 2;
for (var b = 0; b < 3; b++) {
  console.log("world");
}
console.log(b);
