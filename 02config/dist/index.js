"use strict";
class User {
    constructor(email, name) {
        this.city = "dhule";
        this.lastname = "wagh";
        this.email = email,
            this.name = name;
    }
}
let newUser = new User("mayur@gmail.com", "mayur");
newUser.city = "nashik";
