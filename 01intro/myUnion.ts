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
