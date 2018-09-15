const arr = [3, 44, 38, 5, 47, 15, 36, 27, 2, 46, 4, 19, 50, 48];

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
	/*console.log(arr1.length);
	console.log(arr2.length);*/
	while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  let logResult = JSON.stringify(result);
	console.log(`while (i < arr1.length && j < arr2.length): ${logResult} `);
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
	let logResult2 = JSON.stringify(result);
  console.log(`while (i < arr1.length): ${logResult2}`);
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
	let logResult3 = JSON.stringify(result);
  console.log(`while (j < arr2.length): ${logResult3}`);
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort(arr));
