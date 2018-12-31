import React from 'react';
import dateformat from 'dateformat';

const Article = props => {
  if (props.article) {
    return (
      <div className="card">
        <CardImage article={props.article} />
        <CardContent article={props.article} />
      </div>
    )
  } else {
    return null
  }
}

const CardImage = props => {
  return (
    <div className="card-image">
      <a href={props.article.url} target="_blank"><img src={props.article.urlToImage} alt="" /></a>
      <a className="btn-floating halfway-fab waves-effect waves-light white">
        <i className="material-icons md-dark" onClick={handleOnClick}>favorite_border</i>
      </a>
    </div>
  )
}

const CardContent = props => {
  const author = (props.article.author) ? `By: ${props.article.author}` : "";

  return (
    <div className="card-content">
      <p><strong>{props.article.title}</strong></p>
      <p>{author}</p>
      <p>{dateformat(props.article.publishedAt, "mmmm d, yyyy h:MM:ss TT")}</p>
      <p>{props.article.description}</p>
    </div>
  )
}

const handleOnClick = () => {
  console.log("clicked!");
}

export default Article;
