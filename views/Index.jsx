const React = require('react')

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


class Index extends React.Component {
    render() {
        const { ceramicPieces } = this.props
      return (
        <html style={body}>
            <head>
                <title>Minaya Ceramic Creations Index</title>
            </head>
            <body style={main}>
                <h1 style={title}>See our inventory!</h1><br/>
                <ul>
                    {ceramicPieces.map((ceramicPiece) => {
                        return (
                            <li>
                                <h2>{ceramicPiece.name}</h2>
                                <p>Description: {ceramicPiece.description}</p>
                                <p>Price: {ceramicPiece.price}</p>
                                <p>Quantity: {ceramicPiece.quantity}</p>
                                <img src={ceramicPiece.img} width="250px" height="auto"></img>
                                <form action={`/ceramics/${ceramicPiece.id}?_method=DELETE`} method="POST">
                                    <button type="submit" style={button}><h3 style={subtitle}>Delete</h3></button>
                                </form>
                                <a href={`/ceramics/${ceramicPiece.id}/edit`}><button type="submit" style={button}><h4 style={subtitle}>Edit</h4></button></a>
                            </li>
                        )
                    })}
                </ul>
                <a href="/"><button style={button}><h3 style={subtitle}>Back to Main Directory!</h3></button></a><br/>
            </body>
            </html>
      )
    }
  }


module.exports = Index;