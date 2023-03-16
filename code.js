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
