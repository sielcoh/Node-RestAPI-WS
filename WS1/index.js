const express = require('express');
const app = express()
const productController = require('./Controller/productsCont')

app.use('/products', productController)

app.listen(3001, () => {
    console.log('server2 running..');

})
