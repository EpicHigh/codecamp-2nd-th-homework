const fs = require('fs');
const {promisify} = require('util');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

contents = ``;

const readHead = async () => {
    let content = await readFile(`head.txt`, `utf8`);
    contents += `${content}\r\n`;
    readBody()
};

const readBody = async () => {
    let content = await readFile(`body.txt`, `utf8`);
    contents += `${content}\r\n`;
    readLeg()
};

const readLeg = async () => {
    let content = await readFile(`leg.txt`, `utf8`);
    contents += `${content}\r\n`;
    readFeet()
};

const readFeet = async () => {
    let content = await readFile(`feet.txt`, `utf8`);
    contents += `${content}\r\n`;
    await writeFile(`robot.txt`, contents, `utf8`)
};

readHead();


