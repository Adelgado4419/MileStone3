// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const cookieSession = require('cookie-session')


// Express Settings
app.use(cookieSession({
    name: 'session',
    keys:[process.env.SESSION_SECRET ],
    maxAge: 24* 60 * 60 * 1000
}))


const corsOptions = {
    credentials: true,
    origin: [
        'http://localhost:3000/',
        'https://localhost:3000/'
    ]
}
app.use(cors(corsOptions))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

// Controllers & Routes
const userController = require('./Controllers/User_controller.js')
app.use('/api', userController)
app.use('/authentication', require('./Controllers/authentication_controller'))

// Listen for Connections
app.listen(4000, () => {
    console.log(`Listening on 4000`)
})