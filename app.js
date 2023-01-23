const express = require('express')
const app = express()

const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const match= require('./api/routes/matches')
const player = require('./api/routes/players')
const team = require('./api/routes/teams')
const liveScore= require('./api/routes/liveScores')
const user = require('./api/routes/users')

const connectionString = "mongodb+srv://fbsroot:fbs%40123@cluster0.frtesud.mongodb.net/IPL"
mongoose.connect(connectionString)

app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(morgan("dev"))

app.use('/match',match)
app.use('/player',player)
app.use('/team',team)
app.use('/liveScore',liveScore)
app.use('/user',user)

module.exports = app