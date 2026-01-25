/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    
let sum =0
let ans =0

for(let i =0;i<nums.length;i++){
    sum+= nums[i]
}


if(sum%k==0){
    console.log(sum);
}else{
    for(let i = sum ;i>-Infinity;i--){
        
        if(i%k==0){
            console.log(i);
            break
        }
        ans++
    }
}
return ans
};