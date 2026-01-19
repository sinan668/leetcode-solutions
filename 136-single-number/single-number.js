/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let  unique=[]
let a = 0

for(let i =0;i<nums.length;i++){
    for(j=0;j<nums.length;j++){
        if (nums[i]==nums[j]) {
            a++
        }
        
    }
    // console.log(a)
    if(a<=1){
            // console.log(unique);
            unique=nums[i]
            break;
    }
    a=0
}
return unique;

};