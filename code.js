// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(name) {
    if (name === undefined || name === null)
        return "Hello, World!"
    else if (name === true || name === false)
        return "Hello, World!"
    else
    return ("Hello, " + name + "!")
}
function isFive(input) {
    if (input === 5 || input === "5")
        return true
    else
        return false
}
function isEven(input){
    if (input %2 === 0)
        return true
    else
        return false
}
var vowels = ['a' | 'e' | 'i' | 'o' | 'u']
var vowelsUp = ['A' | 'E' | 'I' | 'O' | 'U']
function isVowel(input){
   if (input === 'a' || input === 'A')
       return true
    else
        return false
}
//Assert that:
// isVowel always returns a boolean
// isVowel("a") returns true
// isVowel("A") returns true
// isVowel("y") returns false
// isVowel(4) returns false
// isVowel(true) or isVowel(false) both return false
// isVowel("banana") returns false
// isVowel() returns false