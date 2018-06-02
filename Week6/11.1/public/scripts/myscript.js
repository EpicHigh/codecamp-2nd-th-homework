const knex = require("knex")({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "ap",
        password: "",
        database: "codecamp"
    }
});

function getArray(arr) {
    let temp = [];
    for (let i in arr) {
        temp.push(arr[i]);
    }
    return temp;
}

function tableHead(arr) {
    let temp = [];
    for (let i in arr) {
        temp.push(i);
    }
    return temp;
}

knex
    .select("*")
    .from("user")
    .then(data => {
        const head = tableHead(data[0]);
        const luke = getArray([...data][0]);
        const tony = getArray([...data][1]);
        const somchai = getArray([...data][2]);
        const cinderella = getArray([...data][3]);
        module.exports.head = head;
        module.exports.luke = luke;
        module.exports.tony = tony;
        module.exports.somchai = somchai;
        module.exports.cinderella = cinderella;
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });
