import React from 'react';
import dateformat from 'dateformat';

const Article = (props) => {

  const renderArticle = () => {
    if (props.article) {
      return (
        <div className="card">
          <div className="card-image">
            <a href={props.article.url} target="_blank"><img src={props.article.urlToImage} alt="" /></a>
          </div>
          <div className="card-content">
            <p><strong>{props.article.title}</strong></p>
            <p>By: {props.article.author}</p>
            <p>{dateformat(props.article.publishedAt, "mmmm d, yyyy h:MM:ss TT")}</p>
            <p>{props.article.description}</p>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div>
      {renderArticle()}
    </div>

  )
}

export default Article;
