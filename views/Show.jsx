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

class Show extends React.Component {
    render(){
        const ceramicPiece = this.props.ceramicPieces;
        return(
            <html style={body}>
            <head>
                <title>{ceramicPiece.name}</title>
            </head>
            <body style={main}>
                <h1 style={title}>{ceramicPiece.name}</h1>
                <img src={ceramicPiece.img}></img>
                <div style={main}>
                    <form action={`/ceramics/${ceramicPiece.id}?_method=DELETE`} method="POST">
                        <button type="submit" style={button}><h4 style={subtitle}>Delete Entry</h4></button>
                    </form>
                    <a href={`/ceramics/${ceramicPiece.id}/edit`}><button type="submit" style={button}><h4 style={subtitle}>Edit Entry</h4></button></a>
                </div>
                <a href="/"><button style={button}><h3 style={subtitle}>Back to Main Directory!</h3></button></a><br/>
                <a href="/ceramics"><button style={button}><h3 style={subtitle}>View Current Inventory</h3></button></a><br/>
                
            </body>
            </html>
        )
    }
}

module.exports = Show;