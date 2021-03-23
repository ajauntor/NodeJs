const express = require ('express');


const app = express();

app.get('/', (req, res) => {
    res.send('This is respond form Backend')
});

app.listen(3005, () => console.log('Database calling from 3005 port!') );