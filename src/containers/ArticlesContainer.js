import React, { Component } from 'react';
import Articles from '../components/Articles';
import axios from 'axios';
import dummy_articles from '../dummy_data/dummy_articles';

class ArticlesContainer extends Component {

  // state = {
  //   articles: []
  // }

  state = {
    articles: dummy_articles
  }

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
    console.log('this.state.articles', this.state.articles);
    return (
      <div>
        <p>ArticlesContainer</p>
        <Articles articles={this.state.articles}/>
      </div>
    )
  }
}

export default ArticlesContainer;
