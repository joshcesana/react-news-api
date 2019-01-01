import React, { Component } from 'react';
import SearchForm from '../components/search/SearchForm';
import SearchStats from '../components/search/SearchStats';
import ArticleList from '../components/article/ArticleList';
import { connect } from 'react-redux';
import { fetchSearch } from '../actions/articlesActions';

class SearchContainer extends Component {

  render() {

    return (
      <div>
        <SearchForm fetchSearch={this.props.fetchSearch} />
        <SearchStats numberOfSearchResults={this.props.numberOfSearchResults} searchQuery={this.props.searchQuery} />
        <ArticleList articles={this.props.articles} addSave={this.props.addSave} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('STATE...', state)
  return ({
    articles: state.articles.feed,
    numberOfSearchResults: state.articles.numberOfSearchResults,
    searchQuery: state.articles.searchQuery
  })
}

const mapDispatchToProps = (dispatch) => ({
  addSave: save => dispatch({ type: 'ADD_SAVE', save}),
  fetchSearch: (query) => dispatch(fetchSearch(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
