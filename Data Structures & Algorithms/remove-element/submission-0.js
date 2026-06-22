class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let nums2 = [];
        let k = 0
        // console.log(nums,val)
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] != val) {
                nums[k++] = nums[i]
            }
            
        }
        // console.log(nums2)
        return k;
    }
}
