const express = require('express')
const { message, retry } = require('statuses')
const shampoo = require('../models/shampoo')
const router = express.Router()
const Shampoo = require('../models/shampoo')


// Getting all 
// router.get('/', async (req, res) => {
//     try {
//         const shampoo = await Shampoo.find()
//         res.json(shampoo)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

//Getting One
router.get('/:id', getShampoo, (req, res) => {
    res.send(req.shampoo.name)
})

//Creating one
// router.post('/', async (req, res) => {
//     const shampoo = new Shampoo({
//         name: req.body.name,
//         price: req.body.price,
//         aroma: req.body.aroma,
//         manufacturer: req.body.manufacturer
//     })

//     try {
//         const newShampoo = await shampoo.save()
//         res.status(201).json(newShampoo)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })


async function getShampoo(req, res, next) {

    let shampoo;
    try {
        shampoo = await Shampoo.findById(req.params.id)
        if (shampoo == null) {
            return res.status(404).json({ message: "Cannot find shampoo" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    req.shampoo = shampoo
    next()
}

module.exports = router