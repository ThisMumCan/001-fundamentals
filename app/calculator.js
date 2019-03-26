function add(a, b) {
    return a + b;
}
function subtract (a, b){
    return a - b;
}
function multiply (a, b){
    return a * b;
}

function isOdd (num){
    if (num % 2 == 1) {
        return true
    }
    if (num % 2 == 0){
        return false
    }
}
function isEven (num){
    if (num % 2 == 0) {
        return true
    }
    if (num % 2 == 1){
        return false
    }
}

function divisibleBy (a, b) {
    if (a % b == 0) 
        return true
        else
        return false
    
}
function square (a, b){
    return b/b === a;
}

module.exports = {
    add, 
    subtract,
    multiply,
    isOdd,
    isEven,
    divisibleBy,
    square


};