class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let obj = {};
        let arr = [];
        for(let i = 0; i < nums.length; i++) {
            if(obj[nums[i]]) {
                obj[nums[i]] += 1
            }else {
                obj[nums[i]] = 1
            }

            if(obj[nums[i]] == Math.floor(nums.length / 3) + 1) {
                arr.push(nums[i])
            }
        }
        console.log(obj)
        return arr;
    }
}
