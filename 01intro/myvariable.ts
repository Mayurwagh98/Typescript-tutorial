let myvariable:string = "mayur"


// not a good practice as its pretty obvious that myNum is a number,ts is type interference
let myNum:number = 2323

// good pratice, if its obvious then no need to decalare type of variable
let myNewNum = 23222


//bad practice by using any type keyword
// as you can see type of hero is not restricted so it will consider it as any 
let hero

function myHero(){
    // as ts will consider it as any i can return whatever type of
    // value i want (it can be string, number, boolean as show below)

    // return "iron man" -> returning stirng
    return true // returning boolean
}

console.log(myvariable)