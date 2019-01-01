import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import ArticleList from '../components/article/ArticleList';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/articlesActions';

class SearchContainer extends Component {

  render() {
    return (
      <div>
        <SearchForm fetchSearch={this.props.fetchSearch} />
        <br />
        <ArticleList articles={this.props.articles} addSave={this.props.addSave} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('STATE...', state.articles.feed)
  return ({
    articles: state.articles.feed
  })
}

const mapDispatchToProps = (dispatch) => ({
  addSave: save => dispatch({ type: 'ADD_SAVE', save}),
  fetchSearch: (query) => dispatch(fetchSearch(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
