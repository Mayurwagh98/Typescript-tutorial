const score:Array<number> = []
const names:Array<string> = []

function identityOne(val: string | number): string| number{
    return val
}

function identityTwo(val: any):any{
    return val
}

// if we are not sure what type of value will be passing
// we can use Type keyword
function identityThree<Type>(val:Type):Type{
    return val
}

// using keyword using Type is not necessary we can use
// any keyword similar to Type for example we can use T or any other word or letter as show below
function identityFour<T>(val:T):T{
    return val
}