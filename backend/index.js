import express from 'express';
import fs from 'fs'

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

app.post('/add-expense', async (req, res) => {
    console.log(req.body)
    readFile('./data/expenses.json')
    .then(expenses => {
        
        expenses.push(req.body)
        const data = JSON.stringify(expenses, null, 2)
        writeFile('./data/expenses.json', data)
    })
})

app.listen(3005, () => {
    console.log('backend server connected')
})