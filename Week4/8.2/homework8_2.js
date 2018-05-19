let fs = require('fs');
let text = ``;
let filename = [`body`, `leg`, `feet`];


fs.readFile(`head.txt`, `utf8`, readFile1);

function readFile1(err, data) {
    if (err) {
        throw err;
    }
    else {
        fs.readFile(`${filename[0]}.txt`, `utf8`, readFile2);
        text += `${data}\r\n`;
    }
}

function readFile2(err, data) {
    if (err) {
        throw err;
    }
    else {
        fs.readFile(`${filename[1]}.txt`, `utf8`, readFile3);
        text += `${data}\r\n`;

    }
}

function readFile3(err, data) {
    if (err) {
        throw err;
    }
    else {
        fs.readFile(`${filename[2]}.txt`, `utf8`, readFileCompleted);
        text += `${data}\r\n`;
    }
}

function readFileCompleted(err, data) {
    if (err) {
        throw err;
    }
    else {
        text += `${data}\r\n`;
        fs.writeFile(`robot.txt`, text, `utf8`, writeFileCompleted)
    }
}


function writeFileCompleted(err) {
    if (err) {
        throw err;
    }
    else {
        console.log(`Write a file completed.`)
    }
}