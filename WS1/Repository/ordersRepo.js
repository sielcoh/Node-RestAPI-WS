const jFile = require('jsonfile');
const path = require('path');

//const FILE = 'Data/order.js';
const filePath = path.join(__dirname, "../Data/order.json"); // זה מאפשר ליצר כתובת אבסולוטית מהתיקייה שבה אני נמצא

const getOrders = () => {
    return jFile.readFile(filePath);
}

module.exports = { getOrders };