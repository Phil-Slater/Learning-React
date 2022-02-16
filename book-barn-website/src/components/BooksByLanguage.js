import React, { Component } from 'react';

class BooksByLanguage extends Component {
    constructor() {
        super()
        this.state = {
            language: ''
        }
    }
    getBooksByLanguage = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        const imgBaseUrl = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/'
        const booksByLanguage = this.props.books.map((book, index) => {
            if (this.state.language === '') {
                return null;
            } else if (book.language === this.state.language) {
                return <p key={index}><b>{book.title}</b> - Year: {book.year} - Author: {book.author} - Language: {book.language}<p><img src={`${imgBaseUrl}${book.imageLink}`} width='10%' /></p></p>
            }
        })

        const languageArray = []
        const getLanguages = this.props.books.map((book, index) => {
            if (languageArray.includes(book.language)) {
                return null;
            } else {
                languageArray.push(book.language);
                return <option key={index}>{book.language}</option>;
            }
        })

        return (
            <div>
                <h2>Find Books by Language:</h2>
                <select onChange={this.getBooksByLanguage}>
                    {getLanguages}
                </select>
                {booksByLanguage}
            </div >
        )
    }
}

export default BooksByLanguage
