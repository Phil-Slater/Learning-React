
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

function AddBook(props) {

    const [book, setBook] = useState({})
    const navigate = useNavigate()

    const handleTextUpdate = (event) => {

        setBook({
            ...book,
            [event.target.name]: event.target.value
        })
    }

    const handleSaveBook = () => {
        book.username = props.username
        fetch('http://localhost:8080/add-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        }).then(response => response.json())
            .then(() => {
                navigate('/view-all-books')
            })
    }

    return (
        <div>
            <h1>Add Book</h1>
            <input type="text" placeholder="Enter Book Title" name="title" onChange={handleTextUpdate} />
            <input type="text" placeholder="Enter Book Genre" name="genre" onChange={handleTextUpdate} />
            <input type="text" placeholder="Enter Book Publisher" name="publisher" onChange={handleTextUpdate} />
            <input type="number" placeholder="Enter Book Year" name="year" onChange={handleTextUpdate} />
            <input type="text" placeholder="Enter Image URL" name="imageURL" onChange={handleTextUpdate} />
            <button onClick={handleSaveBook}>Add Book</button>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.user
    }
}

export default connect(mapStateToProps)(AddBook) 
