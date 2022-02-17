
const express = require('express')
const cors = require('cors')
const app = express()

// enable cors 
app.use(cors())
// json parser 
app.use(express.json())

let books = [
    { name: 'Atomic Habits', isbn: 'edrf45' },
    { name: 'Peek Performance', isbn: '44rfed' }
]

app.get('/books', (req, res) => {
    res.json(books)
})

app.post("/books", (req, res) => {
    const name = req.body.name
    const isbn = req.body.isbn

    let book = { name: name, isbn: isbn }
    // add the book to books array 
    books.push(book)
    res.json(book)
})


app.listen(8080, () => {
    console.log('Server is running')
})
