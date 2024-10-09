const express = require('express');
const router = express.Router();
const productService = require('../Service/productService');

router.get('/', async (req, res) => {
    const data = await productService.getAllData();
    return res.json(data);
})

module.exports = router
