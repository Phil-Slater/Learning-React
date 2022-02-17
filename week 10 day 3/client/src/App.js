
import React, { Component } from 'react'
import AddNewBook from './AddNewBook'
import BookList from './BookList'
import Menu from './Menu'
import Name from './Name'

class App extends Component {

  constructor() {

    super()

    this.state = {
      books: [],
      name: ''
    }

  }

  handleOnBookAdded = () => {
    this.fetchAllBooks()
    //console.log('handleOnBookAdded')
  }

  handleNameSaved = (name) => {
    // console.log(name)
    // got the name ^^ from Name.js
    this.setState({
      name: name
    })

  }

  render() {

    return (
      <div>

        <Name onNameSaved={this.handleNameSaved} />
        <h2>{this.state.name}</h2>
        <BookList books={this.state.books} />

        <AddNewBook onBookAdded={this.handleOnBookAdded} />

      </div>
    )
  }

  fetchAllBooks = () => {
    fetch('http://localhost:8080/books')
      .then(response => response.json())
      .then(books => {
        // put the books in the state 
        // State cannot be changed, it can only be replaced 
        //this.state.books = books // DO NOT DO THIS 
        this.setState({
          books: books
        })
      })
  }

  componentDidMount() {
    // fetch all the books 
    this.fetchAllBooks()
  }

}



export default App;
