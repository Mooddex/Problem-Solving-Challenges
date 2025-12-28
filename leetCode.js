

// https://leetcode.com/problems/group-anagrams/description/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};

    for (let word of strs) {
        const key = word.split('').sort().join('');

        // step 2: if key doesn't exist, create it
        if (!map[key]) {
            map[key] = [];
        }

        // step 3: push the word into its group
        map[key].push(word);
    }

    // step 4: return only the grouped values
    return Object.values(map);
};

//--------
var merge = function(nums1, m, nums2, n) {
    // Remove the zeros from nums1 
    nums1.splice(m, nums1.length - m);

    // Add all elements from nums2
    for (let num of nums2) {
        nums1.push(num);
    }

    // Sort nums1 in ascending order
    nums1.sort((a, b) => a - b);
};
//--------
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};

//------
var bingo =function (ticket, win) {
  let miniWins = 0;
  for (let [str, code] of ticket) {
    if (str.split('').some(char => char.charCodeAt(0) === code)) {
      miniWins++;
    }
  }
  return miniWins >= win ? 'Winner!' : 'Loser!';
}
//-------------
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

//-----
var removeElement = function(nums, val) {
    let i = 0; 

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]; 
            i++;               
        }
    }

    return i; 
};

//--------//--------------
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;              
            nums[i] = nums[j]; 
        }
    }

    return i + 1; 
};
//------------------
var twoSum = function(nums, target) {
    for(i=0; i<nums.length ; i++ ){
        for(z=i+1; z<nums.length ; z++){
            if (nums[i]+nums[z]=== target){
                return [i,z]
            }
        }
    }
};
//-----------------------
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};
