// union data types

let score:number | string = 33

score = 24
score = "mayur"

type User1 = {
    name:string
    id:number
}

type Admin = {
    admin_name:string
    id:number
}

// mayur can be both admin or user
let mayur :User1 | Admin = {name:"mayur",id:1}
mayur = {admin_name:"mayur",id:2}

// if remove Admin it will give an error as below

// let mayur :User1 | Admin = {name:"mayur",id:1}
// mayur = {admin_name:"mayur",id:2}

// union type in functions

function getObjIt(id:string | number){
    // make an api calls    

    // id.toLowerCase() -> gives an error as ts doesn't recognise the type of the id as I have give both string & number
    // to handle the above case I can do conditional check as below

    if(typeof id === "string"){
        id.toLowerCase()
    }
}

// union type in array

const data: number[] = [1,2,3]
// const data2: number[] = [1,2,"3"] -> gives an error as ts is expecting only numbers in array
// const data3:string[] | number[] = [1,"2",3] -> not able to recocnise the combination of string, to handle this see the below case
const data3:(string|number)[] = [1,"2",3]

// i can assing a constat type as value as well
let pi:3.14 = 3.14
// pi = 3.145 -> value won't be acceptable other that 3.14

// more use case of the above example can be seen in flight booking app
let seatAllotment:"aisle" | "window"|"middle"

seatAllotment = "aisle"
// seatAllotment = "creaw" -> gives an error