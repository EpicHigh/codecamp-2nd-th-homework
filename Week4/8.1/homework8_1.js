let fs = require('fs');
let text = ``;
fs.readFile('head.txt', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    text += `${data}\r\n`;
    fs.readFile('body.txt', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        text += `${data}\r\n`;
        fs.readFile('leg.txt', 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            text += `${data}\r\n`;
            fs.readFile('feet.txt', 'utf8', function (err, data) {
                if (err) {
                    throw err;
                }
                text += `${data}\r\n`;
                fs.writeFile('robot.txt', text, (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log(`The file has been saved!`)
                })
            })
        })
    })
});
