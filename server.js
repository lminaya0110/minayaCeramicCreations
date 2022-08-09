const exp = require('constants');
const express = require('express')
const app = express()
const router = express.Router()
const ceramicPieces = require('./models/CeramicPieces')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/ceramics', (req,res) => {
    res.send(ceramicPieces)
})


app.listen(3000, () => {
    console.log('Listening on port')
})