const arr = [3, 44, 38, 5, 47, 15, 36, 27, 2, 46, 4, 19, 50, 48];

function insertionSort(arr) {
	let currentValue;
	let j = 0;
	for (let i = 1; i < arr.length; i++) {
		currentValue = arr[i];
		let log1 = JSON.stringify(arr);
		console.log("log1: " + log1);
		for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
			arr[j + 1] = arr[j];
			let log2 = JSON.stringify(arr);
			console.log("log2: " + log2);
		}
		arr[j + 1] = currentValue;
		let log3 = JSON.stringify(arr);
		console.log("log2: " + log3);
	}
	return arr
}

console.log(insertionSort(arr));
