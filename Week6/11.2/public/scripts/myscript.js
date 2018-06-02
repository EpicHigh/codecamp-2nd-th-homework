const knex = require("knex")({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "ap",
        password: "",
        database: "codecamp"
    }
});

knex
    .select("*")
    .from("user")
    .then(obj => {
        module.exports.db = from_database(obj)
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });

function from_database(obj) {
    let temp = ``;
    let start = `{"data": `;
    let date = new Date();
    let fullDate = `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let end = `, "additionalData": {"userId": ${1}, "dateTime": "${fullDate}"}}`;
    temp += `[`;
    for (let i in obj) {
        temp += `${start}${JSON.stringify(obj[i])}${end}`;
        if (i < obj.length - 1) {
            temp += `,`;
        }
    }
    temp += `]`;
    return temp;
}