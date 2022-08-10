const React = require('react')

const body = {
    backgroundColor: "#FDF0D5",
    color: "#331832",
    width: "100%",
    height: "100%",
    alignItems: "center"
}

const main = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
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

class Home extends React.Component {
    render() {
        return (
            <html style={body}>
                <head>
                    <title>Minaya Ceramic Creations</title>
                </head>
                <body style={main}>
                    <h1 style={title}>Minaya Ceramic Creations</h1>
                    <h2 style={subtitle}>Come see our shop!</h2>
                    <div>
                        <a href="/ceramics">
                            <button style={button}>
                                <h3 style={subtitle}>
                                    View Ceramic Inventory
                                </h3>
                            </button>
                        </a>

                        <a href="/ceramics/new">
                            <button style={button}>
                                <h3 style={subtitle}>
                                    Add New Item
                                </h3>
                            </button>
                        </a>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Home;