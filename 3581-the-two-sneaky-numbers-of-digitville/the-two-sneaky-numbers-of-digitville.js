/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let a = 0 
let ans =[]
for(let i = 0 ; i<nums.length;i++){
    for(j=i;j<nums.length;j++){
        if (nums[i]==nums[j]){
            a++
        }
    }
    if(a>1){
        ans.push(nums[i])
        
    }
    a=0
}
return ans 
};