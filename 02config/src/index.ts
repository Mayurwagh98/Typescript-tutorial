class User {
    email:string
    name:string
    city:string = "dhule"
    readonly lastname:string = "wagh"
    constructor(email:string, name:string){
        this.email= email,
        this.name = name
    }
}

let newUser = new User("mayur@gmail.com","mayur")
newUser.city = "nashik"