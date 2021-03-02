
function checkpalindrome(str) {
    
    const arg1 = str.toLowerCase().replace(/[\W_]/g, "").split('').join("");
    const arg2 = arg1.split('').reverse().join("");
    
    return arg1 === arg2;
    
}

checkpalindrome("_eye"); 