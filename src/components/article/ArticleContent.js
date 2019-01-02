import React from 'react';
import dateformat from 'dateformat';

const ArticleContent = props => {
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

export default ArticleContent;
