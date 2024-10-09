const axios = require('axios');
const url = 'http://localhost:3000/products'

const getProds = () => {
    return axios.get(url)
}

module.exports = { getProds }