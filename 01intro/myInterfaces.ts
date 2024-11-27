interface Iuser {
    name:string,
    email:string,
    readonly userId:number,
    googleId?:string, //optional
    // startTrail:() => string //meathod
    startTrail():string, //same as above trail meathod sytanx is diff
    getCoupon(name:string, value:number):number
}


// re-oepening of interfaces (its nothing but adding few extra things in a interface)
// like here i am adding gitHubToken in Iuser
interface Iuser{
    githubToken:string
}

// inheritance
interface AdminUser extends Iuser {
    role:"admin"| "ts" | "learner"
}

const newIuser:Iuser = {
    name:"mayur",
    email:"m@gmail.com",
    userId:123, 
    githubToken:"token",
    startTrail:() => "something",
    getCoupon:(name:"mayur", off:20) => 20
}

// inherited the properties from Iuser
const newIuser2:AdminUser = {
    name:"mayur",
    email:"m@gmail.com",
    userId:123, 
    githubToken:"token",
    role:"admin",
    startTrail:() => "something",
    getCoupon:(name:"mayur", off:20) => 20
}


