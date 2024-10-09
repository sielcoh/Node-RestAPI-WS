const axios = require('axios');

const getAllProdacts = async () => {
    return axios.get('https://fakestoreapi.com/products')
}

module.exports = { getAllProdacts }