const auth = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')
const { User } = db

auth.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
    } else {
        const result = await jwt.encode('something', { id: user.Id })
        res.json({ user: user, token: result.value })
    }
})

// auth.get('/profile', async (req, res) => {
//     try {
//         let user = await User.findOne({
//             where: {
//                 Id: req.session.Id
//             }
//         })
//         res.json(user)
//     } catch (error) {
//         console.log(error)
//     }
// })

auth.get('/profile', async (req,res) => {
    res.json(req.currentUser)
})



module.exports = auth