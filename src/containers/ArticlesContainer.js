import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import { connect } from 'react-redux';
import { addSave, fetchNews } from '../actions/articlesActions';

class ArticlesContainer extends Component {

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    return (
      <div>
        <br />
        <ArticleList articles={this.props.articles} addSave={this.props.addSave} isSaved={false} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('STATE...', state)
  return ({
    articles: state.articles.feed
  })
}

const mapDispatchToProps = (dispatch) => ({
  addSave: save => dispatch(addSave(save)),
  fetchNews: () => dispatch(fetchNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
