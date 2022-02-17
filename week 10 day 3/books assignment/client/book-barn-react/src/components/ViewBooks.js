import React, { Component } from 'react'


class ViewBooks extends Component {

    constructor() {
        super()
        this.state = {
            id: null,
        }
    }

    deleteBook = (id) => {
        fetch('http://localhost:8080/delete-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        }).then(response => response.json())
            .then(() => {
                this.props.onBookAdded()
            })
    }


    render() {
        const bookItems = this.props.books.map(book => {
            return <div key={book.id}><b>{book.title}</b> - {book.genre} - {book.publisher} - {book.year} <button onClick={this.updateBook}>Update</button><button>Delete</button><div><img src={book.imageURL} width='10%' alt="" /></div></div>
        })

        return (
            <div>
                <h1>Books</h1>
                {bookItems}
            </div>
        )
    }

}


export default ViewBooks 
