//1 - write a program to add 2 numbers
//2 - TS congfiguration file --> tsc --init 
// (we do TS congfiguration beacuse we don't want index.js to be created if there is any error in index.ts)
// command to do TS condif --> tsc --noEmitOnError index..ts
// @ts-ignore --> to ignore duplication func name error
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 5));
