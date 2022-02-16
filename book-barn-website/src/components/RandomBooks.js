import React, { Component } from 'react';

class RandomBooks extends Component {
    render() {
        const imgBaseUrl = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/'
        function getRandomInt(max) {
            return Math.floor(Math.random() * max)
        }
        const sliced = this.props.books.slice(getRandomInt(95))
        const bookItems = sliced.map((book, index) => {
            if (book.year < 0) {
                book.year = `${Math.abs(book.year)} B.C.`
            }
            if (index < 5) {
                return <li key={index}><b>{book.title}</b> - Year: {book.year} - Author: {book.author} - Language: {book.language}<p><img src={`${imgBaseUrl}${book.imageLink}`} width='10%' /></p></li>

            }
        })

        return (
            <div>
                <h2>Recommended Books:</h2>
                <ul>
                    {bookItems}
                </ul>
            </div >
        )
    }
}

export default RandomBooks
