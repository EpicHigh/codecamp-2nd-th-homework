const arr = [3, 44, 38, 5, 47, 15, 36, 27, 2, 46, 4, 19, 50, 48];

function insertionSort(arr) {
	let currentValue;
	let j = 0;
	for (let i = 1; i < arr.length; i++) {
		currentValue = arr[i];
		for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentValue;
	}
	return arr
}

console.log(insertionSort(arr));
