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
        res.status(404).json({
        message: `Could not find a user with the provided username and password` 
        })
   } else {
	    const result = await jwt.encode(process.env.JWT_SECRET, { id: user.Id })           
            res.json({ user: user, token: result.value })           
    }
    })


auth.get('/profile', async (req, res) => {
    res.json(req.currentUser)
})


// CREATE NEW users
auth.put('/:id', async (req, res) => {
    try{
        let { password, ...rest } = req.body;
        const user = await User.update({
            ...rest,
            passwordDigest: await bcrypt.hash(password, 10)
        })
        res.json(user)

    } catch (err){
        res.status(500).send('server error')
        console.log(err)
    }
})

module.exports = auth