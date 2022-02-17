const express = require('express')
const cors = require('cors')
const app = express()
const models = require('./models')
// json parser 
app.use(express.json())
app.use(cors())


app.post('/add-book', async (req, res) => {
    const book = {
        title: req.body.title,
        genre: req.body.genre,
        publisher: req.body.publisher,
        year: req.body.year,
        imageURL: req.body.imageURL
    }

    const bookAdded = await models.Book.create(book)
    res.json(bookAdded)
})

app.get('/books', async (req, res) => {
    const books = await models.Book.findAll({})
    res.json(books)
})

app.post('/delete-book', async (req, res) => {
    const deletedBook = await models.Book.destroy({
        where: {
            id: req.body.id
        }
    })
    console.log(deletedBook)
})

app.listen(8080, () => {
    console.log('Server is running...')
})
