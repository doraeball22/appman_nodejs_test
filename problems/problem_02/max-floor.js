const maxFloor = input => {
  // put your code here !!
  let bricks = 0;
  let floors = 0;
  let maxFloors = 0;
  for (let row = 0; bricks < input; row++) {
    for (let col = 0; col < row + 1; col++) {
      bricks++;
    }
    floors++;
  }

  maxFloors = floors - 1;
  console.log(maxFloors);
};

module.exports = {
  maxFloor
};