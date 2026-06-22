class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        if(nums.length <= 0) {
            return [];
        }
        for(let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length - 1; j++) {
                if(nums[j] > nums[j + 1]) {
                    let temp = nums[j];
                    nums[j] = nums[j + 1]
                    nums[j + 1] = temp;
                }
            }
        }
        return nums;
    }
}
