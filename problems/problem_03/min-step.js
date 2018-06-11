const minStep = input => {
  // put your code here !!
  let num = parseInt(input);
  let steps = 0;
  while(num !== 1) {
     // Check even number or Check odd number
    if(num % 2 === 0) {
      // for even number
      num = num / 2;
      steps++;
    }
    else {
      // for ood number
      num = num-1;
      steps++;
    }
  }
  
  return steps;
};
module.exports = { minStep };
