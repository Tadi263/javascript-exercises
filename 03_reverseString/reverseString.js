let text = '';
const reverseString = function(text) {
    let result = ''
    for( let i = text.slice().length; i >= 0 ; i--){
        result += text.charAt(i);
    }
    return result
}

// Do not edit below this line
module.exports = reverseString;
