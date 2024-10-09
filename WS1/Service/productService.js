const productsRepo = require('../Repository/productsRepo');
const orderRepo = require('../Repository/ordersRepo');

const getAllData = async () => {
    const { data: products } = await productsRepo.getProds()
    const { orders } = await orderRepo.getOrders()

    const finalData = products.map(products => {
        const order = orders.find(order => order.productId === products.id)
        if (order) {
            const finalProduct = { ...products, order: { amount: order.amount, orderData: order.orderData } }
            return finalProduct
        }
        return { ...products, order: {} }
    })
    return finalData
}

module.exports = { getAllData }