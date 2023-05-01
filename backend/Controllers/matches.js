const matches = require('express').Router()
const db = require('../models')
const { Matches } = db

// get all the users
matches.get('/', async (req,res) => {
    try {
        const foundUsers = await User.findAll()
        res.status(200).json(foundUsers)
    } catch (err) {
        res.status(500).json('server error')
        console.log(err)
    }
})
// get a users by id
matches.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findOne({
            where: { id: req.params.id },
        })
        res.status(200).json(foundUser)
    } catch (err) {
        res.status(500).send("Server error")
        console.log(err)
    }
})
