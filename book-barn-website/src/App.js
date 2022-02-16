import React, { Component } from 'react';
import AllBooks from './components/AllBooks';
import BooksByLanguage from './components/BooksByLanguage';
import Footer from './components/Footer';
import Menu from './components/menu';
import RandomBooks from './components/RandomBooks';

class App extends Component {

  constructor() {
    super()

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
      .then(response => response.json())
      .then(booksFetched => {
        this.setState({
          books: booksFetched
        })
      })
  }

  render() {
    return (
      <div>
        <Menu />
        <RandomBooks books={this.state.books} />
        <AllBooks books={this.state.books} />
        <BooksByLanguage books={this.state.books} />
        <Footer />
      </div>
    )
  }

};

export default App;
