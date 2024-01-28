const add = function(...nums) {
	return nums.reduce((total, num) => total + num, 0)
};

const subtract = function(...nums) {
	return nums.reduce((total, num) => total - num)
};

const sum = function(...nums) {
  if (nums.length === 1 && Array.isArray(nums[0])) {
    nums = nums[0]
  }
  
  return nums.length > 0 ? nums.reduce((total, num) => total + num, 0) : 0;
};

const multiply = function(...nums) {
  if (nums.length === 1 && Array.isArray(nums[0])) {
    nums = nums[0]
  }

  return nums.reduce((total, num) => total * num)
};

const power = function(...nums) {
  if (nums.length === 1 && Array.isArray(nums[0])) {
    nums = nums[0]
  }

  return nums.reduce((total, num) => total ** num)
};

const factorial = function(num) {
	if (num == 0 || num == 1) {
    return 1
  }
  
  arr = []

  for (let i = 1 ; i <= num ; i++) {
    arr.push(i)
  }

  return arr.reduce((total, num) => total * num)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
