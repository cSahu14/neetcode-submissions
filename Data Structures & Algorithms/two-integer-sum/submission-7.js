class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const map = new Map(); // number -> index

        for (let i = 0; i < nums.length; i++) {
            const need = target - nums[i];

            if (map.has(need)) {
                return [map.get(need), i]; // smaller index first automatically
            }

            map.set(nums[i], i);
        }

        return [];
    }
}
