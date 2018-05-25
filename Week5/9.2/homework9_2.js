const fs = require("fs");
const {promisify} = require("util");
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

contents = ``;

const readHead = async () => {
    let content = await readFile(`head.txt`, `utf8`);
    return `${content}\r\n`;
};

const readBody = async () => {
    let content = await readFile(`body.txt`, `utf8`);
    return `${content}\r\n`
};

const readLeg = async () => {
    let content = await readFile(`leg.txt`, `utf8`);
    return `${content}\r\n`
};

const readFeet = async () => {
    let content = await readFile(`feet.txt`, `utf8`);
    return `${content}\r\n`
};

Promise.all([readHead(), readBody(), readLeg(), readFeet()])
    .then(value => {
        writeFile(`robot.txt`, value, `utf8`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });
