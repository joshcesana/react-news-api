import React from 'react';
import dateformat from 'dateformat';
import CardImage from './CardImage';
import CardContent from './CardContent';

const Article = props => {
  if (props.article) {
    return (
      <div className="card hoverable">
        <CardImage article={props.article} addSave={props.addSave} />
        <CardContent article={props.article} />
      </div>
    )
  } else {
    return null
  }
}

export default Article;
