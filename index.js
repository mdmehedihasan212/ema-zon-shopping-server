const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('ema zon shopping')
})

app.listen(port, () => {
    console.log('ema zon shopping server is running', port);
})