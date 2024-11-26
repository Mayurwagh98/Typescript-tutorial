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