// Modules and Globals

const express = require('express')
const app = express();
const cors = require('cors')
const { sequelize } = require('sequelize')

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

app.use(bodyParser.json())

// Controllers & Routes

// app.use('/api', require('./Controllers/User_controller'))
const usersController = require('./controllers/User_controller')
app.use('/api', usersController)


// Listen for Connections
app.listen(4005, () => {
    console.log(`Listening on 4005`)
})