import React, { Component } from 'react';
import ArticleList from '../components/ArticleList';
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
    console.log('ArticlesContainer props:', this.props);
    return (
      <div>
        <br />
        <ArticleList articles={this.props.articles}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    articles: state.articles
  })

}

export default connect(mapStateToProps)(ArticlesContainer);
