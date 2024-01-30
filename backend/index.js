import express from 'express';
import fs from 'fs'

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type');

    next();
});

const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return;
            }

            const result = JSON.parse(data)
            resolve(result)
        })
    })
}

const writeFile = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, 'utf-8', (err) => {
            if (err) {
                console.error(err)
                return;
            }
            resolve(true)
        })
    })
}

app.get('/expenses', async (req, res) => {
    readFile('./data/expenses.json')
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send('Error')
        })
})

app.listen(3005, () => {
    console.log('backend server connected')
})