const express = require('express');
const router = express.Router();
const productService = require('../Service/productsService');

router.get('/', async (req, res) => {
    const data = await productService.allUsersOrders();
    return res.json(data);
})

module.exports = router