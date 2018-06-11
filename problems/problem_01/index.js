const { threeSum } = require('./three-sum');

// My test Input
//[ [ 1, 4, 5 ], [ 2, 3, 5 ] ]
const inputArr = [5, 4, 3, 2, 1, 0];
const target = 5;
let resutls = threeSum(inputArr, target);
console.log(resutls);

module.exports = { threeSum };


