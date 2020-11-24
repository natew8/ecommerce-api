const e = require('express')
const products = require('../products.json')



const getProduct = (req, res) => {
    const { id } = req.params

    console.log(id)

    const product = products.find((e) => e.id === +id)
    if (product) {
        res.status(200).send(product)
    } else {
        res.status(404).send('Product Does not Exist.')
    }
}

module.exports = getProduct



// getSingleUser: (req, res) => {
//     const { user_id } = req.params

//     console.log(user_id)

//     const user = users.find((e) => e.first_name === user_id)
//     if (user) {
//         res.status(200).send(`Welcome ${user.first_name}! Here is your homepage!`)
//     } else {
//         res.status(404).send('User does not exist')
//     }
// }