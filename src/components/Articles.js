import React, { Component } from 'react';
import dateformat from 'dateformat';

const Articles = (props) => {

  console.log('Articles props', props);

  let renderArticles = () =>
    props.articles.map(article =>
      <div className="row">
        <div className="col s12 l6">
          <div className="card" key={article.title}>
            <div className="card-image">
              <a href={article.url} target="_blank"><img src={article.urlToImage} alt="" /></a>
            </div>
            <div className="card-content">
              <p><strong>{article.title}</strong></p>
              <p>By: {article.author}</p>
              <p>{dateformat(article.publishedAt, "mmmm d, yyyy h:MM:ss TT")}</p>
              <p>{article.description}</p>
            </div>
          </div>
        </div>
      </div>
    );


  return (
    <div>
      {renderArticles()}
    </div>
  )
}

export default Articles;
