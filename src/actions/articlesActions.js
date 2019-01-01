import axios from 'axios';
import dummy_data from '../reducers/dummy_data'


export function fetchNews() {

  // for development only
  const articles = { data: { articles: dummy_data}}
  return (dispatch) => {
    dispatch({ type: 'FETCH_NEWS', articles })
  }

  // uncomment when project is complete:

  // return (dispatch) => {
  //   dispatch({ type: 'LOADING_NEWS' });
  //   axios.get(process.env.REACT_APP_API_URL, {
  //     params: {
  //       country: process.env.REACT_APP_API_COUNTRY,
  //       category: process.env.REACT_APP_API_CATEGORY,
  //       apiKey: process.env.REACT_APP_API_KEY
  //     }
  //   })
  //   .then(articles => dispatch({ type: 'FETCH_NEWS', articles }));
  // }
}

export function fetchSearch(query) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SEARCH' });
    axios.get(process.env.REACT_APP_API_URL, {
      params: {
        country: process.env.REACT_APP_API_COUNTRY,
        category: process.env.REACT_APP_API_CATEGORY,
        q: query,
        apiKey: process.env.REACT_APP_API_KEY
      }
    })
    .then(articles => dispatch({ type: 'FETCH_SEARCH', articles }));
  }
}
