//1 - write a program to add 2 numbers
//2 - TS congfiguration file --> tsc --init 
// (we do TS congfiguration beacuse we don't want index.js to be created if there is any error in index.ts)
// command to do TS config --> tsc --noEmitOnError index.ts


// @ts-ignore --> to ignore duplication func name error

function sum(a:number,b:number):number{

    return a + b
}

console.log(sum(5,5))
