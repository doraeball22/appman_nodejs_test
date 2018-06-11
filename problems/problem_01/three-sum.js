const threeSum = (nums, target) => {
  // put your code here !!
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        results.push([nums[i], nums[j]])
      }
    }
  }

  return results;
};

module.exports = {
  threeSum
};