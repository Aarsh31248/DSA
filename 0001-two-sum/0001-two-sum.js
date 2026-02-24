/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i
    }

    for (let i = 0; i < arr.length; i++) {
        let pair = target - arr[i]
        if (map[pair] !== undefined && map[pair] !== i) {
            return [i, map[pair]]
        }
    }
};