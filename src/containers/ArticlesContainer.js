import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import axios from 'axios';
import { connect } from 'react-redux';

class ArticlesContainer extends Component {

  componentDidMount() {
    // axios.get(process.env.REACT_APP_API_URL, {
    //   params: {
    //     country: process.env.REACT_APP_API_COUNTRY,
    //     category: process.env.REACT_APP_API_CATEGORY,
    //     apiKey: process.env.REACT_APP_API_KEY
    //   }
    // })
    // .then(response => {
    //   console.log('response:', response);
    //   this.setState({
    //     articles: response.data.articles
    //   })
    // })
    // .catch(error => {
    //   console.log('get error:', error);
    // })
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
