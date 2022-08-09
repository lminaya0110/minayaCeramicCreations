const React = require('react')

class New extends React.Component {
    render() {
        return(
            <div>
                <h1>New Ceramics Page</h1>
                <form action="/ceramics" method="POST">
                    Name: <input type="text" name="name" /><br/>
                    <input type="submit" name="" value="Create New Ceramic Piece"/>
                </form>
            </div>
        );
    }
}

module.exports = New;