const productsWS = require('../Repository/productsWS');



const allUsersOrders = async () => {

    const { data: products } = await productsWS.getAllProdacts();
    const finalProducts = products.map(product => { return { id: product.id, title: product.title } })
    return finalProducts

}

module.exports = { allUsersOrders }