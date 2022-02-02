
// Implement following array methods


let arr1 = [1, 2, 3, 6, 7, 18, 20, 21],
    arr2 = ['a', 'b', 'c'];

// -------------a--------------
// function myConcat(arr1, arr2) {
//     return [...arr1, ...arr2]
// }
// -------stugum-----

// console.log(myConcat(arr1, arr2));
// console.log(myConcat(arr1, [1, 2, 3,]));

// -------b---------

// function myFill(arr, arg, start = 0, end = arr.length) {
//     const argArr = [];
//     let count = end - start;
//     while (count != 0) {
//         argArr.push(arg);
//         count--;
//     }
//     return [...arr.slice(0, start), ...argArr, ...arr.slice(end, arr.length)];
// }

// -------stugum-----
// console.log(myFill(arr1, 'b', 0, 5));
// ---------------c--------------------

// function myFind(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return arr[i];
//         }
//     }
// };

// -------stugum-----
// function checkAge(age) {
//     return age > 18;
// };

// console.log(myFind(arr1, checkAge));
// ---------------------d----------------------
// function myFind(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return i;
//         }
//     }
// };

// -------stugum-----
// function checkAge(age) {
//     return age > 18;
// };

// console.log(myFind(arr1, checkAge));
// -------------------e--------------------

// function myFlat(arr, depth = 1) {

//     while (depth != 0) {
//         let test = arr.length;
//         for (let i = 0; i < test; i++) {
//             if (Array.isArray(arr[i])) {
//                 arr = [...arr.slice(0, i - 1), ...arr[i], ...arr.slice(i + 1)];
//             }
//         }
//         depth--;

//     }
//     return arr;
// };
// // ----stugum----
// let arr3 = [1, 2, 3, 4, 5, 6, [7, 8, 9, [10, 11, 12, 13, [14, 15, 16]]]];
// console.log(myFlat(arr3));
// ----------------f-------------------????
// let numbers = [1, 2, 3]


// function myMap(array,fn) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         let inf = fn(array[i]);
//         newArr.push(inf)
//     }
//     return newArr
// };


// function myFn(arg) {
//     return arg * 2
// }

// console.log(myMap(numbers,myFn));
// -----------------g----------??????
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((p, current) => p * current, 1);

console.log(result);// 15


function myReduce(arr, previousValue, item, index, array) {
    console.log(x);
}

myReduce([1, 2, 3],)

// -----------------------2-------------------------


// function unique(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let newArr = [...arr.slice(i + 1)];
//         if (newArr.includes(arr[i])) {
//             return 'NOT only of unique items';
//         }
//     }
//     return 'only of unique items'
// };

// // // ----stugum----
// const uniqueArr = [1, 2, 3, 'a', 'b', 'c'],
//     notUniqueArr = [1, 2, 3, 'a', 3, 4, 5];

// console.log(unique(uniqueArr));
// console.log(unique(notUniqueArr));
// ------------------------3-------------------------

// function Myisogram(text) {
//     let arr = text.split(' ').join('').split('');
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) {
//                 return 'is NOT a Isogram'
//             }
//         }

//     };
//     return 'Isogramm'

// };
// // -------stugum----
// console.log(Myisogram('hi may name is Hripsime'));
// console.log(Myisogram('hi may'));
// ----------------------4-----------------

// ------------a--------------
// function myIntersection(...arr) {

//     let result = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         let b = arr[i];
//         result = result.filter(i => b.includes(i));
//     };
//     return result;

// }

// console.log(myIntersection([1, 2, 3,5], [1, 2, 4, 5], [1, 5, 6]));

// -------------------b------------------
// function myPull(arr, ...values) {
//     return arr.filter(i => !values.includes(i));
// }

// console.log(myPull([1, 2, 3, 4], 1, 2));
// --------------------c-----------------
// function myTail(arr) {
//
// }

// console.log(myTail([1, 2, 3, 4]));
// --------------d-------------
// function  myTake(arr,num=1) {
//     return arr.slice(0, num);
// }

// console.log(myTake([1,2,3]));

