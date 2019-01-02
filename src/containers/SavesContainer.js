import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import { connect } from 'react-redux';
import { fetchSaves } from '../actions/articlesActions';
import axios from 'axios';

class SavesContainer extends Component {

  componentDidMount() {
    console.log("componentDidMount")
    this.props.fetchSaves();
  }

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

const mapDispatchToProps = (dispatch) => ({
  fetchSaves: () => dispatch(fetchSaves())
})

export default connect(mapStateToProps, mapDispatchToProps)(SavesContainer);
