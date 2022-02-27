const { readFile, writeFile } = require('fs');

readFile('./container/second.txt', "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const second = result;

    readFile('./container/subContainer/first.txt', "utf8", (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const first = result;
        writeFile('./container/third.txt', `all of the file ${second} AND ${first}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        })
    });

});