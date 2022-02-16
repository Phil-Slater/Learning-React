import React, { Component } from 'react';

class AllBooks extends Component {
    constructor() {
        super()
        this.state = {
            books: []
        }
    }
    showAllBooks = () => {
        this.setState({
            books: this.props.books
        })
    }

    render() {
        const imgBaseUrl = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/'
        const bookItems = this.props.books.map((book, index) => {
            if (book.year < 0) {
                book.year = `${Math.abs(book.year)} B.C.`
            }
            while (index < 5 && this.state.books.length === 0) {
                return <li key={index}><b>{book.title}</b> - Year: {book.year} - Author: {book.author} - Language: {book.language}<p><img src={`${imgBaseUrl}${book.imageLink}`} width='10%' /></p></li>
            }
            if (this.state.books.length !== 0) {
                return <li key={index}><b>{book.title}</b> - Year: {book.year} - Author: {book.author} - Language: {book.language}<p><img src={`${imgBaseUrl}${book.imageLink}`} width='10%' /></p></li>
            }
        })

        return (
            <div>
                <h2>All Books:</h2>
                <ul>
                    {bookItems}
                </ul>
                <button onClick={this.showAllBooks}>Show more...</button>
            </div >
        )
    }
}

export default AllBooks
