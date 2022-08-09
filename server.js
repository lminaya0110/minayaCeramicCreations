const exp = require('constants');
const express = require('express')
const app = express()
const router = express.Router()
const ceramicPieces = require('./models/CeramicPieces')

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:true}));

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