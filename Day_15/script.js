// const POLICAD_QUESTION_DATA = {
//     products: [
//         {
//             id: 26,
//             title: "Green Chili Pepper",
//             price: 0.99,
//         },
//         {
//             id: 27,
//             title: "Honey Jar",
//             price: 6.99,
//         },
//         {
//             id: 28,
//             title: "Ice Cream",
//             price: 5.49,
//         },
//         {
//             id: 29,
//             title: "Juice",
//             price: 3.99,
//         },
//         {
//             id: 30,
//             title: "Kiwi",
//             price: 2.49,
//         },
//         {
//             id: 31,
//             title: "Lemon",
//             price: 0.79,
//         },
//         {
//             id: 32,
//             title: "Milk",
//             price: 3.49,
//         },
//         {
//             id: 33,
//             title: "Mulberry",
//             price: 4.99,
//         },
//         {
//             id: 34,
//             title: "Nescafe Coffee",
//             price: 7.99,
//         },
//         {
//             id: 35,
//             title: "Potatoes",
//             price: 2.29,
//         },
//     ],
//     total: 194,
//     skip: 25,
//     limit: 10,
// };

// const data = POLICAD_QUESTION_DATA;
// const items = data.products;
// let mx = 0;
// let i = 0;
// const n = items.length;

// while (i < n) {
//     if (mx < items[i].price) {
//         mx = items[i].price;
//     }

//     i += 1;
// }

// console.log(mx);

// i = 0;

// while (i < n) {
//     if (mx == items[i].price) {
//         console.log(items[i].title);
//     }
//     i += 1;
// }

// --------------------------------

const student = { name: "Ajay", age: 20, rollNumber: "2616400901" };
const { name, age } = student;
console.log(name, age);

const { rollNumber, country } = student;
console.log(rollNumber, country);

// --------------------------------
