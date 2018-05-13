let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.filter(x => {
    if (x % 2 === 0) {
        return x
    }
});
let newArr2 = newArr.map(x => {
    return x * 1000;
});
console.log(newArr2);