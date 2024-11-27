// normal array
// const user :(string | number)[] = [1,"m"]

// tuples -> can be used where I have to restrict the format of an array
// eg:- on 1st index i want number, on 2nd i want string, etc. -> is such cases I can use tuples
let tuser:[number, string, boolean]
tuser = [1,"2",true]
// tuser= [1,"2","3"] -> throws an error

// usecase example
let rgb:[number, number, number] = [255,244,255]
// let rgb:[number, number, number] = [255,244,255, 0.5] -> throws an error as 4th value is not expected

// decalring our own type
type newUser = [number, string]

const newUser1: newUser = [123,"m@gmail.com"]
// const newUser1: newUser = [123,"m@gmail.com", true] -> throws an error

