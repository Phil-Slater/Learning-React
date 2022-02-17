
import React, { Component } from 'react'

class BookList extends Component {
    render() {
        const bookItems = this.props.books.map(book => {
            return <li key={book.isbn}>{book.name}</li>
        })

        return (
            <div>
                <h1>Books</h1>
                {bookItems}
            </div>
        )
    }
}

export default BookList 
