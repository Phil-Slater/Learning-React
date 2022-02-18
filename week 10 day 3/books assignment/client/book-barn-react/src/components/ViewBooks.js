import React, { Component } from 'react'


class ViewBooks extends Component {

    constructor() {
        super()
        this.state = {
            books: []
        }
    }

    handleBookDelete = (bookId) => {
        fetch(`http://localhost:8080/delete-book/${bookId}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    this.fetchAllBooks()
                }
            })
    }

    fetchAllBooks = () => {
        fetch('http://localhost:8080/books')
            .then(response => response.json())
            .then(books => {
                this.setState({
                    books: books
                })
            })
    }

    componentDidMount() {
        this.fetchAllBooks()
    }

    render() {
        const bookItems = this.state.books.map(book => {
            return <div key={book.id}><b>{book.title}</b> - {book.genre} - {book.publisher} - {book.year} <button onClick={() => this.handleBookDelete(book.id)}>Delete</button><div><img src={book.imageURL} width='10%' alt="" /></div></div>
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
