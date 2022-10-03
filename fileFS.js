let fs = require('fs');
let filename = 'test.txt';

async function readFile(fname){
    try {
        const data = await fs.promises.readFile(fname);
        console.log(data.toString());
    } catch (error) {
        console.log(err);
    }
};

readFile(filename);