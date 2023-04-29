// Modules and Globals

const express = require('express')
const app = express();
const cors = require('cors')
const { sequelize } = require('sequelize')
const path = require('path')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')


// Express Settings
require('dotenv').config()

// app.use(cookieSession({
//     name: 'session',
//     keys:[process.env.SESSION_SECRET ],
//     maxAge: 24* 60 * 60 * 1000
// }))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../build')))
app.use(bodyParser.json())

// Controllers & Routes
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

// app.use('/api', require('./Controllers/User_controller'))
const usersController = require('./Controllers/User_controller.js')
app.use('/api', usersController)


// Listen for Connections
app.listen(4005, () => {
    console.log(`Listening on 4005`)
})