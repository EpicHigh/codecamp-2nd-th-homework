const fs = require("fs");
const path = require("path");

let obj = JSON.parse(fs.readFileSync(path.join(__dirname, 'homework2_1.json'), "utf8"));
let new_obj = from_database(obj);

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

module.exports.from_file = new_obj;
