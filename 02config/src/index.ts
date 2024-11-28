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

class User{
    public email:string // we can mark email as public, but by default all the parameters are marked as public
    name:string
    private city:string = "mayur" // making city as private, it won't be accessible outside
    constructor(email:string,name: string){
        this.email = email
        this.name = name
        this.city = "dhule" // as city is marked as private, but it will still be accessible in class, but not outside of it
    }
}

let newUser = new User("mayur@gmail.com","mayur")
// newUser.city -> gives an error