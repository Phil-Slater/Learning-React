import React, { Component } from "react";
import Menu from './Menu';
import FeaturedArticle from './FeaturedArticle';
import ArticleList from './ArticleList';

class App extends Component {
  render() {
    const articles = [
      { title: 'Hello WatchKit', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis at.', comments: 12, likes: 20 },
      { title: 'Introduction to Swift', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing tristique risus nec feugiat in fermentum. Ultrices eros in cursus turpis massa tincidunt dui ut ornare.', comments: 7, likes: 23 }
    ]

    return (
      <div>
        <Menu />
        <FeaturedArticle />
        <ArticleList allArticles={articles} />
      </div>
    )
  }
}

export default App
