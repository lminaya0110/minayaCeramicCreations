const express = require('express')
const app = express()
const router = express.Router()
const port = process.env.PORT || 3003
require('dotenv').config()
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//if mongoose error delete if depreciation error useNewUrlParser: true, useUnifiedTopology: true
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})
const ceramicPieces = require('./models/CeramicPieces')
app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/ceramics', (req,res) => {
    res.send(ceramicPieces)
})

app.get('/ceramics/new', (req,res) => {
    res.render('New')
})

app.post('/ceramics', (req,res) => {
    res.send(req.body)
})


app.listen(3000, () => {
    console.log('Listening on port')
})