
import React, { Component } from 'react'

class AddNewBook extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            isbn: ''
        }
    }

    handleSaveBook = () => {
        fetch('http://localhost:8080/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json())
            .then(result => {
                // this.props.onBookAdded is going to call onBookAdded function -- passed to parent
                this.props.onBookAdded()
            })
    }

    handleTextUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /*
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        }) 
    }

    handleIsbnChange = (e) => {
        this.setState({
            isbn: e.target.value
        }) 
    }*/

    render() {
        return (
            <div>
                <h1>AddNewBook</h1>
                <input type="text" placeholder="Enter name" name="name" onChange={this.handleTextUpdate} />
                <input type="text" placeholder="Enter isbn" name="isbn" onChange={this.handleTextUpdate} />
                <button onClick={this.handleSaveBook}>Add Book</button>
            </div>
        )
    }
}

export default AddNewBook 
