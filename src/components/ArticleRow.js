import React, { Component } from 'react';
import Article from './Article';

class ArticleRow extends Component {
  render() {
    const article1 = this.props.row[0] || null
    const article2 = this.props.row[1] || null
    const article3 = this.props.row[2] || null
    
    return (
      <div className="row">
        <div className="col s12 m6 l4">
            <Article article={article1} />
        </div>
        <div className="col s12 m6 l4">
            <Article article={article2} />
        </div>
        <div className="col s12 m6 l4">
            <Article article={article3} />
        </div>
      </div>
    )
  }
}

export default ArticleRow;
