import React from 'react';
import dateformat from 'dateformat';
import ArticleImage from './ArticleImage';
import ArticleContent from './ArticleContent';

const Article = props => {
  if (props.article) {
    return (
      <div className="card hoverable">
        <ArticleImage article={props.article} addSave={props.addSave} deleteSave={props.deleteSave} isSaved={props.isSaved} />
        <ArticleContent article={props.article} />
      </div>
    )
  } else {
    return null
  }
}

export default Article;
