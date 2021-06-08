const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        'message': 'Hitting first route /'
    });
});


app.get('/about', (req, res) => {
    res.json({
        'message': 'Hitting about route'
    });
});


app.get('/home', (req, res) => {
    res.status(500)
    .json({
        'message': 'Hitting home'
    });
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})

