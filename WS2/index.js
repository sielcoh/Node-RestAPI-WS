const express = require('express');
const app = express();
const productsController = require('./Controller/productsController');

app.use('/products', productsController);

app.listen(3000, () => {
    console.log('server running...');
})