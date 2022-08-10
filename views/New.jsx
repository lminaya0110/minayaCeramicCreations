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


class New extends React.Component {
    render() {
        return(
            <html style={body}>
                <head>
                    <title>New Item!</title>
                </head>
                <body style={main}>
                    <h1 style={title}>New Item!</h1>
                    <form action="/ceramics" method="POST">
                        Name: <input type="text" name="name" placeholder="name"></input><br/>
                        Image: <input type="text" name="img" placeholder="Image URL"></input><br/>
                        <input type="submit" name="" value="Submit Entry"></input>
                    </form>

                    <a href="/"><button style={button}><h3 style={subtitle}>Back to Main Directory!</h3></button></a><br/>
                </body>
            </html>
        )
    }
}

module.exports = New;