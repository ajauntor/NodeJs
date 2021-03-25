const express = require('express');
var cors = require('cors')


const app = express();
app.use(cors())

const users = ["Auntor", "Sajal", "Amdadul", "Rakib", "Imran", "Hasib"];

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const name = users[userId];
    res.send({userId, name});
    
})

app.listen(3005, () => console.log('Database calling from 3005 port!'));













// app.get('/phone/samsung', (req, res) => {
//     res.send({ name: 'oppo', price: 451, stock: 17 });
// })

// app.get('/', (req, res) => {
//     const phone = {
//         price: 100,
//         name: 'samsung'
//     }
//     res.send(phone);
// });