const products = require('../products.json')
const e = require('express')

const getProducts = (req, res) => {
    const { price } = req.query
    if (!price) {
        res.status(200).send(products)
    } else {
        const filteredProducts = products.filter(e => e.price >= +price)
        res.status(200).send(filteredProducts)
    }
}

module.exports = getProducts
