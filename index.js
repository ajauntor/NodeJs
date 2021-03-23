const express = require('express');


const app = express();

app.get('/', (req, res) => {
    const phone = {
        price: 100,
        name: 'samsung'
    }
    res.send(phone);
});
app.get('/phone/samsung', (req, res) => {
    res.send({ name: 'oppo', price: 451, stock: 17 });
})

app.listen(3005, () => console.log('Database calling from 3005 port!'));