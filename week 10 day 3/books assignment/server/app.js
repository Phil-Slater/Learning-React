const express = require('express')
const cors = require('cors')
const app = express()
const models = require('./models')
const bcrypt = require("bcryptjs");
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

app.delete('/delete-book/:id', async (req, res) => {
    try {
        const deletedBook = await models.Book.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ success: true })
    } catch (error) {
        res.json({ success: false, message: 'Unable to delete book.' })
    }
})

app.get('/update-book/:id', async (req, res) => {
    const book = await models.Book.findOne({
        where: {
            id: req.params.id
        }
    })

    res.json(book)
})

app.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = {
        username: req.body.username,
        password: hashedPassword
    }

    const userCreated = await models.User.create(user)
    res.json(userCreated)
})

app.get('/login', async (req, res) => {
    const user = await models.User.findOne({
        where: {
            username: req.body.username
        }
    })

    if (!user) {
        const match = bcrypt.compare(req.body.password, user.dataValues.password)
        if (!match) {
            // logged in
        } else {
            // password is incorrect
        }
    } else {
        // username does not exist
    }

})

app.listen(8080, () => {
    console.log('Server is running...')
})
