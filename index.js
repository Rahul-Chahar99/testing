const arr = [11, 2, 3, 4, 5];
// const arr1 = [6, 7, 8, 9, 10];

function productOfTwoMaximums(arr) {
  let max = -Infinity;
  let max2 = -Infinity;
  if (arr.length < 2) return arr[1] + arr[0];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (current > max) {
      max2 = max;
      max = current;
    } else if (max2 < current) {
      max2 = current;
    }
  }
  return max * max2;
}
const product = productOfTwoMaximums(arr);
console.log(product);

