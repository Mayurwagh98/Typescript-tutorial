// bad practice as num type is not defined it will take it as any
function addNum(num) {
    // num.toLowerCase() -> as type is not defined for num, I can do this operation, or any other method
    // to avoide this see the below function
    return num + 2;
}
// good practice
function addNewNum(num) {
    return num + 2;
}
addNum(4);
addNewNum(6);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("mayur");
function getDetails(name, email, isPaid) {
    console.log(name);
}
getDetails("mayur", "mayur@gloc.dev", false);
// what if i want to pass the values of only 2 parameters, but a function is expecting 3
// below is the solution
function getUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // as i am not passing any value of isPaid, so to avoid the error
    // i am assiging a dafault false boolean
    console.log(name);
}
getUser("mayur", "mayur@yahoo.com");
