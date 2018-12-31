import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import axios from 'axios';
import { connect } from 'react-redux';


class SearchContainer extends Component {

  state = {
    articles: []
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
    // })
    // .catch(error => {
    //   console.log('API error:', error);
    // })
  }

  render() {
    return (
      <div>
        <SearchForm />
      </div>
    )
  }
}

export default connect()(SearchContainer);
