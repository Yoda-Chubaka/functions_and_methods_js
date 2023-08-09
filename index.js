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


// const arr1 = ["apple", "pineapple", "kiwi", "raspberry"];
// const arr2 = [1, 2, 3, 4];
// const sum = arr1.concat(arr2);
// console.log(sum);

// const text = document.querySelector(".class-text");