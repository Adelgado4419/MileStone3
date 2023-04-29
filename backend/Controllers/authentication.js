const auth = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { User } = db

auth.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
    } else {
        req.session.Id = user.Id
        res.json({ user })
    }
})

auth.get('/profile', async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                Id: req.session.Id
            }
        })
        res.json(user)
    } catch {
        res.json(null)
    }
})


module.exports = auth