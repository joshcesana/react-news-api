import axios from 'axios';

export function fetchNews() {
  axios.get(process.env.REACT_APP_API_URL, {
    params: {
      country: process.env.REACT_APP_API_COUNTRY,
      category: process.env.REACT_APP_API_CATEGORY,
      apiKey: process.env.REACT_APP_API_KEY
    }
  })
  .then(response => {
    console.log('response:', response);
    this.setState({
      articles: response.data.articles
    })
  })
  .catch(error => {
    console.log('get error:', error);
  })
}

export function fetchSearch(query) {
  axios.get(process.env.REACT_APP_API_URL, {
    params: {
      country: process.env.REACT_APP_API_COUNTRY,
      category: process.env.REACT_APP_API_CATEGORY,
      q: query,
      apiKey: process.env.REACT_APP_API_KEY
    }
  })
  .then(response => {
    console.log('response:', response);
    this.setState({
      articles: response.data.articles
    })
  })
  .catch(error => {
    console.log('get error:', error);
  })
}
