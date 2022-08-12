const React = require('react')
const CeramicPieces = require('../models/CeramicPieces')

const body = {
    backgroundColor: "#FDF0D5",
    color: "#331832",
    width: "100%",
    height: "100%"
}

const main = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const button = {
    margin: "10px",
    borderRadius: "6px",
    border: "solid 4px #331832",
    backgroundColor: "#FDF0D5",
    width: "50%",
    marginBottom: "2rem",
    marginTop: "1rem"
}

const title = {
    color: "#0C1618",
    fontWeight: "2.25rem"
}

const subtitle = {
    color: "#0C1618",
    fontWeight: "1.5rem"
}

class Edit extends React.Component {
    render () {
        const ceramicPieces = this.props.ceramicPieces
        return (
            <html style={body}>
                <head>
                    <title>Edit Ceramic Items!</title>
                </head>

                <body style={main}>
                    <h1 style={title}>Update Ceramics Inventory</h1>
                </body>
                <form action={`/ceramics/${ceramicPieces.id}?_method=PUT`} method="POST">
                        Name: <input type="text" name="name" placeholder='Name'/><br/>
                        Image: <input type="text" name="img" placeholder='Image URL' /><br/>
                        Description: <input type="text" name="description" placeholder='Description'/><br/>
                        Price: $<input type="number" name="price" placeholder='Price'/><br/>
                        Quantity: <input type="number" name="quantity" placeholder='Quantity'/><br/>
                        <input type="submit" name="" value="Edit Entry"/>
                    </form>
                    <img src={ceramicPieces.img} width="250px" height="auto"></img>

                <a href="/"><button style={button}><h3 style={subtitle}>Back to Main Directory!</h3></button></a><br/>
            </html>
        )
    }
}

module.exports = Edit;