let fs = require('fs');
let text = ``;

fs.readFile('head.txt', 'utf8', (error, data) => readFile(error, data));
{
    fs.readFile('body.txt', 'utf8', (error, data) => readFile(error, data));
    {
        fs.readFile('leg.txt', 'utf8', (error, data) => readFile(error, data));
        {
            fs.readFile('feet.txt', 'utf8', (error, data) => readFile(error, data))
        }
    }
}

function readFile(err, data) {
    if (err) {
        throw err
    }
    text += `${data}\r\n`;
    fs.writeFile('robot.txt', text, (err) => isWriteFileError(err));
}


function isWriteFileError(err) {
    if (err) {
        throw err
    }
    console.log(`The file has been saved!`)
}