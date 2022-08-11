const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3003
const mongoose = require('mongoose')
const CeramicPieces = require('./models/CeramicPieces')
const methodOverride = require('method-override')
const ceramicPiecesData = require('./utilities/ceramicPiecesData')

//MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
})

//Middleware
app.use((req, res, next) => {
    console.log(`I run for all routes`);
    next();
})
app.use(methodOverride("_method"));

//Views
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }))

//Port
app.listen(port, () => {
    console.log(`I am listening on port`, port);
})

//Seed Route
// app.get('/ceramics/seed', (req, res)=>{
//     ceramicPieces.create([
//         {
//             name:'Vase',
//             price:'$25.99',
//             // img: {https://images.pexels.com/photos/7185789/pexels-photo-7185789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1}
//         },
//         {
//             name:'pitcher',
//             price:'$35.99',
//             // img: {https://images.pexels.com/photos/10687652/pexels-photo-10687652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1}
//         },
//         {
//             name:'mug',
//             price:'$19.99',
//             // img: {https://images.pexels.com/photos/10002425/pexels-photo-10002425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1}
//         }
//     ], (err, data)=>{
//         res.redirect('/ceramics');
//     })
// })

app.get('/ceramics/seed', async (req,res) => {
  await CeramicPieces.deleteMany({
    //prop: //
  })
  await CeramicPieces.create(
    ceramicPiecesData
  )
  res.redirect('/ceramics')
})

//Home Page
app.get('/', (req, res) => {
    res.render('Home')
})


//Index
app.get("/ceramics", (req, res) => {
    CeramicPieces.find({}, (error, allCeramicPieces) => {
      res.render("Index", {
        ceramicPieces: allCeramicPieces,
      })
    })
  })


//New
app.get("/ceramics/new", (req, res) => {
    res.render("New")
  })

//Post route
  app.post("/ceramics/", (req, res) => {
    //Data manipulation
    let name = req.body.name.split("")
    name[0] = name[0].toUpperCase()
    req.body.name = name.join("")
  
    CeramicPieces.create(req.body, (err, createdCeramicPieces) => {
      res.redirect("/ceramics")
      //    res.send(createdCeramicPieces)
    })
  })

  //Show 
  app.get("/ceramics/:id", (req, res) => {
    CeramicPieces.findById(req.params.id, (err, foundCeramicPieces) => {
      res.render("Show", {
        ceramicPieces: foundCeramicPieces,
      })
    })
  })

//Delete
app.delete("/ceramics/:id", (req, res) => {
    CeramicPieces.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/ceramics");
    })
  })

//Edit
  app.get("/ceramics/:id/edit", (req, res) => {
    CeramicPieces.findById(req.params.id, (err, foundCeramicPieces) => {
      if (!err) {
        res.render("Edit", {
          ceramicPieces: foundCeramicPieces,
        })
      } else {
        res.send({
          msg: err.message,
        })
      }
    })
  })

//New info into database
app.put("/ceramics/:id", (req, res) => {
    CeramicPieces.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
      (error, ceramicPieces) => {
        res.redirect(`/ceramics/${req.params.id}`);
      }
    )
  })



