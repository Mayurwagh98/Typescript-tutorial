function createUser({ firstname, isPaid }: { firstname: string; isPaid: boolean }) {
    console.log(firstname, isPaid);
}

// restricting return value as object

// reurning an empty object 
function createNewUser():{}{
    return {}
}

// restricting the returning value to object & checking the type of parameters
function createLatestUser({firstname,isPaid}:{firstname:string, isPaid:boolean}):{firstname:string, isPaid:boolean}{
    return {firstname, isPaid}
}

createLatestUser({firstname:"mayur",isPaid:true})

///// type aliases ////

type User= {
    firstname:string;
    email:string;
    isActive:boolean;
}

function createOtherUser(user:User){
    console.log(user)
}
createOtherUser({firstname:"mayur",email:"abc@gmail.com",isActive:false})

function creteOtherUser2(user:User):User{
    return {firstname:"mayur",email:"abc@gmail.com",isActive:false}
}

createOtherUser({firstname:"mayur",email:"abc@gmail.com",isActive:false})