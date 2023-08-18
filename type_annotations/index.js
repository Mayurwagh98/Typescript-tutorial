// todo --> String initialization
// declare a vairable message of type string and assign it the value "hello typscript"
var message = "hello typescript";
// todo --> Concatenation
// Create 2 variables firstName and lastName of type string and assign them your first and lastname, concatenate
// the 2 variables and store them in fullName vairbale
var firstName = "mayur";
var lastName = "wagh";
var fullName = firstName + lastName;
// todo --> String length
// Declare a vaiable sentence with string type and assign it a sentence of your choice, find the length
// of that sentence and store it in sentenceLen variable
var sentence = "Hi this is mayur";
var sentenceLen = sentence.length;
// todo --> Uppercase and Lowercase
// Decalre a variable name text, assign it a sentence of your choice and convert that sentence into
// uppercase and lowercase store both of them in new variables with name, upperText and lowerText
var text = "This is demo text";
var upperText = text.toUpperCase();
var lowerText = text.toLowerCase();
// todo --> Substring
// Declare a variable longText of type string and assign it a long sentence, extract the first 10 characters
// from it and store them in a vairable called shortText
var longText = "This is a long sentence for demo purpose";
var shortText = longText.replace(/\s/g, '').slice(0, 10);
console.log(shortText);
// todo --> String Comparison
// Declare 2 variables str1 and str2 of type string and assign them diff sentence. Compare the 2 strings
// and store the result (true or false) in a variable result
var str1 = "this is sentence of string 1";
var str2 = "this is sentence of string 2";
var result = str1 === str2;
// todo --> String Template
// Declare variable product and price of type and number, create string using tempalte literals to 
// dispalay the product and its price in the formate product {product} is priced {price} dollars
var product = "boat earphones";
var price = 2000;
var total = "Total amount for buying ".concat(product, " is ").concat(price);
console.log(total);
