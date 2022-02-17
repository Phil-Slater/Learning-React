
import React, { Component } from 'react'

class AddBook extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            genre: '',
            publisher: '',
            year: null,
            imageURL: ''
        }
    }

    handleTextUpdate = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSaveBook = () => {
        fetch('http://localhost:8080/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json())
            .then(() => {
                this.props.onBookAdded()
            })
    }


    render() {
        return (
            <div>
                <h1>Add Book</h1>
                <input type="text" placeholder="Enter Book Title" name="title" onChange={this.handleTextUpdate} />
                <input type="text" placeholder="Enter Book Genre" name="genre" onChange={this.handleTextUpdate} />
                <input type="text" placeholder="Enter Book Publisher" name="publisher" onChange={this.handleTextUpdate} />
                <input type="number" placeholder="Enter Book Year" name="year" onChange={this.handleTextUpdate} />
                <input type="text" placeholder="Enter Image URL" name="imageURL" onChange={this.handleTextUpdate} />
                <button onClick={this.handleSaveBook}>Add Book</button>
            </div>
        )
    }
}

export default AddBook 
