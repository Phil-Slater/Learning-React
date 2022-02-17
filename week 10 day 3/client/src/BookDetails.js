
import React, { Component } from 'react'

class BookDetails extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
    }


    render() {

        return (
            <div>
                <h1>Book Details</h1>

            </div>
        )
    }
}

export default BookDetails 
