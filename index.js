function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) return true;
    }
  }
  return false;
}



/* 
  O(n²)
*/

/* 
  Create function.
    Iterate through array.
    Iterate through the array a second time.
    If statement to return true or false.
*/

/*
  First, create the function that takes 2 arguments.
  Next, iterate throught the array.
  Then, iterate through the rest of the array.
  Then, if sum of both iterators equal target, return true
  If it is not equal, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
