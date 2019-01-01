import axios from 'axios';
import dummyData from '../reducers/dummyData'


export function fetchNews() {

  // for development only
  const articles = { data: { articles: dummyData.articles }}
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

  // for development only
  const articles = { data: { articles: dummyData.dummySearch }};
  const searchQuery = query;
  return (dispatch) => {
    dispatch({ type: 'FETCH_SEARCH', articles, searchQuery })
  }

  // uncomment when project complete:

  // return (dispatch) => {
  //   dispatch({ type: 'LOADING_SEARCH' });
  //   axios.get(process.env.REACT_APP_API_URL, {
  //     params: {
  //       country: process.env.REACT_APP_API_COUNTRY,
  //       category: process.env.REACT_APP_API_CATEGORY,
  //       q: query,
  //       apiKey: process.env.REACT_APP_API_KEY
  //     }
  //   })
  //   .then(articles => dispatch({ type: 'FETCH_SEARCH', articles: articles, searchQuery: query }));
  // }
}
