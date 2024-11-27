interface Iuser {
    name:string,
    email:string,
    readonly userId:number,
    googleId?:string, //optional
    // startTrail:() => string //meathod
    startTrail():string, //same as above trail meathod sytanx is diff
    getCoupon(name:string, value:number):number
}

const newIuser:Iuser = {
    name:"mayur",
    email:"m@gmail.com",
    userId:123, 
    startTrail:() => "something",
    getCoupon:(name:"mayur", off:20) => 20
}