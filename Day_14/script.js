// console.log("hello");

// const studentName = 'Likhilesh';
// const city = 'Delhi';
// const college = 'KRMU';
// const rollNumber = '2616400901';

// ------------------------------------_
// const title = "hello";

// const student = {
//     name: "Likhilesh",
//     city: "Delhi",
//     college: "KRMU",
//     rollNumber: "2616400901",
// };

// console.log(student);
// console.log(typeof student);

// // READ
// console.log(student.name);
// console.log(student["name"]);

// // CREATE
// // student.country = "INDIA"
// student["country"] = "INDIA";

// console.log(student);
// ------------------------------------

// const age = 50;

// age = 50;

// ------------------------------------
// const obj = { title: "hello" };

// obj = 99;

// ----------------------------------
// const student = {
//     name: "Likhilesh",
//     city: "Delhi",
//     college: "KRMU",
//     rollNumber: "2616400901",
// };

// console.log(student);
// console.log(typeof student);

// // READ
// console.log(student.name);
// console.log(student["name"]);

// // CREATE
// // student.country = "INDIA"
// student["country"] = "INDIA";

// // UPDATE
// student.city = "Mumbai";
// student["college"] = "Zenith";

// console.log(student);
// ----------------------------------

// const product = {
//     title: "Monitor",
//     price: 7000,
// };

// console.log(product);

// product.price = 9000;

// console.log(product);

// product.title = "Keyboard";

// // -------------------------------------
// const product = {
//     title: "Monitor",
//     price: 7000,
// };

// const keyboard = product;

// keyboard.title = "Keyboard";

// console.log(keyboard);
// console.log(product);

// -------------------------------------
// const product = {
//     title: "Monitor",
//     price: 7000,
// };

// delete product.title;
// delete product["price"];

// -----------------------------------

// const fruitsArr = ["Mango", "Grapes"];
// console.log(fruitsArr);
// const fruitsObj = {
//     0: "Mango",
//     1: "Grapes",
// };
// console.log(fruitsObj);
// console.log(typeof fruitsArr);
// console.log(typeof fruitsObj);

const fruitsArr = ["Mango", "Grapes"];
console.log(fruitsArr[0]);
fruitsArr[20] = "Apple";
console.log(fruitsArr);

const fruitsObj = {
    0: "Mango",
    1: "Grapes",
};
console.log(fruitsObj[0]);
fruitsObj[20] = "Apple";
console.log(fruitsObj);
