import React, { Component } from "react";

class ArticleList extends Component {
    render() {
        const articleList = this.props.allArticles.map((article, index) => {
            return <div key={index}><h3>{article.title}</h3><p>{article.body}</p><p>{article.comments} comments</p><p>{article.likes} likes</p></div>
        })
        return (
            <div>
                {articleList}
            </div>
        )
    }
}

export default ArticleList
