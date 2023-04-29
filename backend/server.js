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

app.use(cookieSession({
    name: 'session',
    keys:[process.env.SESSION_SECRET ],
    maxAge: 24* 60 * 60 * 1000
}))

//cors
const corsOptions = {
    credentials: true,
    origin: [
        'http://localhost:3000',
        'https://localhost:3000',
        'http://localhost:4005',
        'https://localhost:4005'
    ]
}

app.use(cors(corsOptions))
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

const AuthController = require('./Controllers/authentication.js')
app.use('/auth', AuthController)

// Listen for Connections
app.listen(4005, () => {
    console.log(`Listening on 4005`)
})