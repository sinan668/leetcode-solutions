/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = []

for(let i=0;i<nums.length;i++){
    for(let j=0 ;j<nums.length;j++){
        if(nums[i]==j){
            ans[i] = nums[j]
        }
    }
}
return ans;

};