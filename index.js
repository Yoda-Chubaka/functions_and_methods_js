/*FUNCTION EXPRESSION 
It's less common.
⛔It's impossible to call before initialization - will be error!!
We should use it when this function was created as part of an expression.
*/
const multiply = function (a, b) {
    return a * b;
}
console.log(multiply(7, 4)); // 28


/* FUNCTION DECLARATION 
It's more common and easier to read. 
🟢It can be called before initialization - raw #21.
We should use it when this function is separate and standalone in code.
*/
console.log(subtract(15, 4)); // 11

function subtract(a, b) {
    return a - b;
}

/*ARROW FUNCTION
It's spesial anonimous function to use in context another function or code where it was declared.
It takes a fixed number of arguments.
If it takes only one one argument we don't have to use brackets "()" (raws# 51-53).
If we describe only one action we don't have to use curly brackets "{}" and word "return" (raws #40-45).
If we describe few actions we have to use "{}" and word "return" (raws #47-49).
Variables have block scope.
It can be used as callback function.
*/

const sum1 = (a, b, c) => {
    console.log("I love JS");
    return a + b + c;
}
console.log(sum1(5, 8, 2)); // 15


const sum2 = (a, b, c) => 
    a + b + c;
console.log(sum2(5, 8, 2)); // 15


const sum3 = a =>
    a;
console.log(sum3(7)); // 7


//  How we can add functional from js to html (from console to our website)
const h1 = document.querySelector(".class-text");
h1.textContent = "And JS loves me too🔅";

// ARRAY METHODS
// concat
const arr1 = ["apple", "pineapple", "kiwi", "raspberry"];
const arr2 = [1, 2, 3, 4];
const result = arr1.concat(arr2);
console.log('concat:', result);
// ['apple', 'pineapple', 'kiwi', 'raspberry', 1, 2, 3, 4]

// every
const arr3 = [1, 2, 3, 4];
const check = (element) => {
    return element > 2;
    }
const result1 = arr3.every(check);
console.log('every:', result1); // false

// filter
const arr4 = ["apple", "pineapple", "kiwi", "raspberry"];
const check1 = (word) => {
    return word.length > 5
}
const result2 = arr4.filter(check1);
console.log('filter:', result2); // ['pineapple', 'raspberry']

// find
const arr5 = [1, 2, 3, 4];
const check2 = (element) => {
    return element % 2 === 0
}
const result3 = arr5.find(check2);
console.log('find:', result3); // 2

// findIndex
const arr6 = [1, 5, 3, 7];
const check3 = (element) => {
    return element % 2 === 0
}
const result4 = arr6.findIndex(check3);
console.log('findIndex:', result4); // -1

// flat
const arr7 = [1, 2, 3, 4, [5, 6, 7, 8]];
const result5 = arr7.flat();
console.log('flat:', result5); // [1, 2, 3, 4, 5, 6, 7, 8]

// flatMap
const arr8 = [1, 2, 3, 4];
const result6 = arr8.flatMap((element) => element * 2);
console.log('flatMap:', result6); // [2, 4, 6, 8]

// forEach
const arr9 = [1, 2, 3, 4];
let newArr = 0;
const result7 = arr9.forEach((element) => {
    console.log(element); // 1, 2, 3, 4
    return newArr += 1;
})
console.log('forEach:', result7); // undefined

// includes
const arr10 = ["apple", "pineapple", "kiwi", "raspberry"];
const result8 = arr10.includes("kiwi");
console.log('includes:', result8); // true

// indexOf
const arr11 = ["apple", "pineapple", "kiwi", "raspberry"];
const result9 = arr11.indexOf('raspberry');
console.log('indexOf:', result9); // 3

// isArray
const arr12 = 5;
const result10 = Array.isArray(arr12);
console.log('isArray:', result10); // false

// join
const arr13 = ["apple", "pineapple", "kiwi", "raspberry"];
const result11 = arr13.join(', ');
console.log('join:', result11); // apple, pineapple, kiwi, raspberry

// keys
const arr14 = ["apple", "pineapple", "kiwi", "raspberry"];
const iterator = arr14.keys();
for (const key of iterator) {
    console.log('keys:', key); // 0, 1, 2, 3
}

// lastIndexOf
const arr15 = [1, 2, 3, 4, 1];
const result12 = arr15.lastIndexOf(1);
console.log('lastIndexOf:', result12); // 4

// map
const arr16 = [4, 9, 16, 25];
const result13 = arr16.map(Math.sqrt);
console.log('map:', result13); // [2, 3, 4, 5]

// pop
const arr17 = [4, 9, 16, 25];
const result14 = arr17.pop();
console.log('pop:', result14); // 25
console.log(arr17); // [4, 9, 16]

// push
const arr18 = [4, 9, 16, 25];
const result15 = arr18.push(36);
console.log('push:', result15); // 5
console.log(arr18); // [4, 9, 16, 25, 36]

// reduce
const arr19 = [4, 9, 16, 25];
const result16 = arr19.reduce((acc, element) => {
    return acc + element
})
console.log('reduce:', result16); // 54

// reverse
const arrNew = [4, 9, 16, 25];
const resultNew = arrNew.reverse();
console.log('reverse:', resultNew); // [25, 16, 9, 4]

// shift
const arr20 = ["apple", "pineapple", "kiwi", "raspberry"];
const result17 = arr20.shift();
console.log('shift:', result17); // apple
console.log(arr20); // ['pineapple', 'kiwi', 'raspberry']

// slice
const arr21 = ["apple", "pineapple", "kiwi", "raspberry"];
const result18 = arr21.slice(3);
console.log('slice:', result18); // ['raspberry']

// some
const arr22 = [4, 9, 16, 25];
const check4 = (element) => element % 5 === 0;
const result19 = arr22.some(check4);
console.log('some:', result19); // true

// sort
const arr23 = [4, 2, 5, 15, 7, 3, 11];
const result20 = arr23.sort();
console.log('sort:', result20); // [11, 15, 2, 3, 4, 5, 7]
console.log(arr23); // [11, 15, 2, 3, 4, 5, 7]

// splice
const arr24 = ["apple", "pineapple", "kiwi", "raspberry", "melon", "plumb"];
const result21 = arr24.splice(2, 0, "blueberry");
console.log('splice:', result21); // []
console.log(arr24); // ['apple', 'pineapple', 'blueberry', 'kiwi', 'raspberry', 'melon', 'plumb']

// toString
const arr25 = ["apple", "pineapple", "kiwi", "raspberry", "melon", "plumb"];
arr25.toString();
const result22 = arr25.join(', ');
console.log('toString:', result22); // apple, pineapple, kiwi, raspberry, melon, plumb

// unshift
const arr26 = ["apple", "pineapple", "kiwi", "raspberry", "melon", "plumb"];
const result23 = arr26.unshift("coconut");
console.log('unshift:', result23); // 7
console.log(arr26); // ['coconut', 'apple', 'pineapple', 'kiwi', 'raspberry', 'melon', 'plumb']

// values
const arr27 = ["apple", "pineapple", "kiwi", "raspberry", "melon", "plumb"];
const result24 = arr27.values();
console.log('values:', result24.next().value); // apple
console.log('values:', result24.next().value); // pineapple
console.log('values:', result24.next().value); // kiwi
console.log('values:', result24.next().value); // raspberry
console.log('values:', result24.next().value); // melon
console.log('values:', result24.next().value); // plumb