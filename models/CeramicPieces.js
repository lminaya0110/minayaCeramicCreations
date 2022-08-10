const mongoose = require('mongoose');

//Schema
const ceramicPiecesSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img:  { type: String, required: true }
})

const CeramicPieces = mongoose.model('CeramicPieces', ceramicPiecesSchema);

const ceramicPieces = [
    {name: "Mug", img: "https://images.pexels.com/photos/10002425/pexels-photo-10002425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Pitcher", img: "https://images.pexels.com/photos/10687652/pexels-photo-10687652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name: "Vase", img: "https://images.pexels.com/photos/7185789/pexels-photo-7185789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
]


module.exports = CeramicPieces;