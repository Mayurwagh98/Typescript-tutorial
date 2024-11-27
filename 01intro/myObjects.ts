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

// readonly keyword

type NewUser = {
    readonly _id:string,
    name:string,
    email:string,
    isPaid:boolean
}

let newUser: NewUser ={
    _id:"",
    name:"mayur",
    email:"m@gmail.com",
    isPaid:true
}

// newUser._id="mayur" -> cannot do this as _id is a readonly property

type cardname = {
    cardName:string
}

type cardNum = {
    cardnum:number
}

//  cardname & cardNum -> using this we are using pre wrote objects, merging them with a new one
// which is cvv
type cvv = cardname & cardNum &{
    cvv:number
}