const fetch = require(`isomorphic-fetch`);
const head = [`id`, `firstname`, `lastname`, `company`, `salary`];

module.exports.head = head;

async function fetchHomeWork2_1() {
    const homework =
        "https://raw.githubusercontent.com/EpicHigh/thailand-software-park-codecamp-2-homework/master/Week1/2.1/homework2_1.json";
    const response = await fetch(homework);
    const data = await response.json();
    return data;
}

function getArray(arr) {
    let temp = [];
    for (let i in arr) {
        temp.push(arr[i]);
    }
    return temp;
}

fetchHomeWork2_1()
    .then(data => {
        const luke = [...data][0];
        const tony = [...data][1];
        const somchai = [...data][2];
        const monkey = [...data][3];
        const new_luke = getArray(luke);
        const new_tony = getArray(tony);
        const new_somchai = getArray(somchai);
        const new_monkey = getArray(monkey);
        module.exports.luke = new_luke;
        module.exports.tony = new_tony;
        module.exports.somchai = new_somchai;
        module.exports.monkey = new_monkey;
    })
    .catch(err => {
        console.log(`error: ${err}`);
    });
