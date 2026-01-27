/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {

let temp =[]

for(let i =0;i<nums.length;i++){
    temp.push(nums[i])
}

return [...temp,...nums]

};