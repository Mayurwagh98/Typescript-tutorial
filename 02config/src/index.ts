// class User {
//     email:string
//     name:string
//     city:string = "dhule"
//     readonly lastname:string = "wagh"
//     constructor(email:string, name:string){
//         this.email= email,
//         this.name = name
//     }
// }

// let newUser = new User("mayur@gmail.com","mayur")
// newUser.city = "nashik"

// public and private keywords

// class User{
//     public email:string // we can mark email as public, but by default all the parameters are marked as public
//     name:string
//     private city:string = "mayur" // making city as private, it won't be accessible outside
//     constructor(email:string,name: string){
//         this.email = email
//         this.name = name
//         this.city = "dhule" // as city is marked as private, but it will still be accessible in class, but not outside of it
//     }
// }

// let newUser = new User("mayur@gmail.com","mayur")
// newUser.city -> gives an error

// ------ getters & setters -----
class User{
    email:string
    name:string
    //private _courseCount=1 // if this keeps private then subUser wont be able to change course count
    // if we want to keep variable private as well as changeble, we can use protected keyword
    // but only subUser or inherited childrens can change _courseCount
    protected _courseCount=1 
    readonly city = "jaipur"
    private deleteToken(){
        console.log("Token deleted")
    }
    constructor(email:string, name:string){
        this.email = email,
        this.name = name
    }
    get getAppleEmail():string{
        return `apple email is ${this.email}`
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(courseCount){
        if(courseCount <=1){
            throw new Error("Couse count should be more that -1")
        }
        this._courseCount = courseCount
    }
}

class subUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

let mayur = new User("mayur@gmil.com","mayur")

// mayur.deleteToken() -> this will throw an error as its private