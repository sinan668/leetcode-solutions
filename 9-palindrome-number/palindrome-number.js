/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
let b = String(x)

let check1 = []
let check2 = []

let result = false
for(let i = 0;i<b.length;i++){
    check1.unshift(b[i])    
}
for(let i = 0;i<check1.length;i++){
    check2 += check1[i]
}
if(check2 == b){
    result = true
}
return result;
};