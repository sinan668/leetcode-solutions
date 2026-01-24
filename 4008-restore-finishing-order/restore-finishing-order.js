/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let array = [...order,...friends]
let result =[]

for(let i =0 ;i<array.length;i++){
    for(let j = i+1;j<array.length;j++){
        if(array[i]==array[j]){
            result.push(array[i])
        }
    }
    
    
}
return result;

};