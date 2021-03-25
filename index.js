const express = require('express');


const app = express();
const users = ["Auntor", "Sajal", "Amdadul", "Rakib", "Dabid Carry", "Chinlo Hamsk", "Jack Naim", "Liza"];

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
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const name = users[userId];
    res.send({userId, name});
    
})

app.listen(3005, () => console.log('Database calling from 3005 port!'));