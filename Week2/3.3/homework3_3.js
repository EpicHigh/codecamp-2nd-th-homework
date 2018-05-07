let oldArray = [1, 2, {a: 1, b: {c: 3, d: 4}}];
let newArray = [];
let reduce = {};
let newTableObj = {};
let oldTableObj = {};
let myTable = ``;

function cloneObj(array) {
    for (let i in array) {
        if (typeof array[i] === `object`) {
            newArray[i] = Object.assign({}, array[i]);
        } else {
            newArray[i] = [...array][i];
        }
    }
}

cloneObj(oldArray);

function accessNewObj() {
    for (let i in reduce) {
        newTableObj[i] = reduce[i];
        if (typeof reduce[i] === `object`) {
            reduce = {...reduce[i]};
            accessNewObj();
        }
    }
}

function accessOldObj() {
    for (let i in reduce) {
        oldTableObj[i] = reduce[i];
        if (typeof reduce[i] === `object`) {
            reduce = {...reduce[i]};
            accessOldObj();
        }
    }
}

function accessArr(array) {
    if (array !== oldArray) {
        for (let i in array) {
            newTableObj[i] = array[i];
            if (typeof array[i] === `object`) {
                reduce = {...array[i]};
                accessNewObj();
            }
        }
    } else {
        for (let i in array) {
            oldTableObj[i] = array[i];
            if (typeof array[i] === `object`) {
                reduce = {...array[i]};
                accessOldObj();
            }
        }
    }
}

function createTable() {
    myTable += `<tr><th>Which array?</th>`;
    for (let i in newTableObj) {
        myTable += `<th>${i}</th>`;
    }
    myTable += `</tr><tr><td>New Array</td>`;
    for (let i in newTableObj) {
        myTable += `<td>${newTableObj[i]}</td>`;
    }
    myTable += "</tr>";
    myTable += `<tr><td>Old Array</td>`;
    for (let i in oldTableObj) {
        myTable += `<td>${oldTableObj[i]}</td>`;
    }

    myTable += "</tr>";
}

newArray[1] = 10;
newArray[2]["a"] = 100;
accessArr(oldArray);
accessArr(newArray);
createTable();
document.getElementById("myTable").innerHTML = myTable;
