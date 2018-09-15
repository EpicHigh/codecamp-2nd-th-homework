const arr = [3, 44, 38, 5, 47, 15, 36, 27, 2, 46, 4, 19, 50, 48];

function bubbleSort(arr) {
  const swap = (arr, index1, index2) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
  for (let i = arr.length; i > 0; i--) {
  	for (let j = 0; j < i - 1; j++) {
  		if (arr[j] > arr[j + 1]) {
  			swap(arr, j, j + 1)
		  }
	  }
  }
  return arr;
}

console.log(bubbleSort(arr));