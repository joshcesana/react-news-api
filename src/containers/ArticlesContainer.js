import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import { connect } from 'react-redux';

class ArticlesContainer extends Component {

  componentDidMount() {
    // fetchNews() goes here ?
  }

  render() {
    return (
      <div>
        <br />
        <ArticleList articles={this.props.articles} addSave={this.props.addSave} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    articles: state.articles.feed
  })
}

const mapDispatchToProps = (dispatch) => ({
  addSave: save => dispatch({ type: 'ADD_SAVE', save})
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
