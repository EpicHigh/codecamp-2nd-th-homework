const knex = require("knex")({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "ap",
        password: "",
        database: "codecamp"
    }
});

knex.select("*")
    .from("book")
    .then(data => {
        let head = Object.keys(data[0]).map(x => {
            return x
        });
        let arr = data.map(x => {
            let temp = [];
            for (let i of head) {
                temp.push(x[i])
            }
            return temp
        });
        module.exports.bookHead = head;
        module.exports.bookArr = arr;
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });

knex.select("*")
    .from("employee")
    .then(data => {
        let head = Object.keys(data[0]).map(x => {
            return x
        });
        let arr = data.map(x => {
            let temp = [];
            for (let i of head) {
                temp.push(x[i])
            }
            return temp
        });
        module.exports.employeeHead = head;
        module.exports.employeeArr = arr;
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });

knex.select("*")
    .from("transaction")
    .then(data => {
        let head = Object.keys(data[0]).map(x => {
            return x
        });
        let arr = data.map(x => {
            let temp = [];
            for (let i of head) {
                temp.push(x[i])
            }
            return temp
        });
        module.exports.transactionHead = head;
        module.exports.transactionArr = arr;
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });