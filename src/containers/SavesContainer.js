import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import { connect } from 'react-redux';

class SavesContainer extends Component {
  render() {
    console.log('SavesContainer redux props:', this.props);
    return (
      <div>
        <h1>Saves</h1>
        <ArticleList articles={this.props.articles}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles.saves
  }
}

export default connect(mapStateToProps)(SavesContainer);
