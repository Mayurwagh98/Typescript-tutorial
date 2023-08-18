// todo --> String initialization
// declare a vairable message of type string and assign it the value "hello typscript"

let message:string = "hello typescript"

// todo --> Concatenation
// Create 2 variables firstName and lastName of type string and assign them your first and lastname, concatenate
// the 2 variables and store them in fullName vairbale

let firstName:string = "mayur"
let lastName:string = "wagh"
let fullName:string = firstName + lastName


// todo --> String length
// Declare a vaiable sentence with string type and assign it a sentence of your choice, find the length
// of that sentence and store it in sentenceLen variable

let sentence:string = "Hi this is mayur"
let sentenceLen: number = sentence.length


// todo --> Uppercase and Lowercase
// Decalre a variable name text, assign it a sentence of your choice and convert that sentence into
// uppercase and lowercase store both of them in new variables with name, upperText and lowerText

let text:string = "This is demo text"

let upperText:string = text.toUpperCase()
let lowerText:string = text.toLowerCase()


// todo --> Substring
// Declare a variable longText of type string and assign it a long sentence, extract the first 10 characters
// from it and store them in a vairable called shortText

let longText = "This is a long sentence for demo purpose"
let shortText = longText.replace(/\s/g, '').slice(0, 10)
console.log(shortText)

// todo --> String Comparison
// Declare 2 variables str1 and str2 of type string and assign them diff sentence. Compare the 2 strings
// and store the result (true or false) in a variable result

const str1:string = "this is sentence of string 1"
const str2:string = "this is sentence of string 2"

const result:boolean = str1 === str2


// todo --> String Template
// Declare variable product and price of type and number, create string using tempalte literals to 
// dispalay the product and its price in the formate product {product} is priced {price} dollars