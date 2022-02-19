const express = require('express')
const { message, retry } = require('statuses')
const manufacturer = require('../models/manufacturer')
const router = express.Router()
const Manufacturer = require('../models/manufacturer')


// Getting all 
// router.get('/', async (req, res) => {
//     try {
//         const manufacturer = await Manufacturer.find()
//         res.json(manufacturer)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })
// Getting One

router.get('/:id', getManufacturer, (req, res) => {
    res.send(req.manufacturer.name)
})

//Creating one
// router.post('/', async (req, res) => {
//     const manufacturer = new Manufacturer({
//         name: req.body.name,
//         country: req.body.country,
//         founded: req.body.founded,
//         about: req.body.about
//     })

//     try {
//         const newManufacturer = await manufacturer.save()
//         res.status(201).json(newManufacturer)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }
// })


async function getManufacturer(req, res, next) {

    let manufacturer;
    try {
        manufacturer = await Manufacturer.findById(req.params.id)
        if (manufacturer == null) {
            return res.status(404).json({ message: "Cannot find Manufacturer" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    req.manufacturer = manufacturer
    next()
}

module.exports = router