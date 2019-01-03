// import cuid from 'cuid';
// export const cuidFn = cuid;

const initState = {
  saves: [],
  feed: [],
  numberOfSearchResults: 0,
  searchQuery: '',
  loading: false
}

const articles_reducer = (state = initState, action) => {
  switch(action.type) {

    case 'LOADING_NEWS':
      console.log('LOADING_NEWS...', { ...state, loading: true })
      return { ...state, loading: true }

    case 'FETCH_NEWS':
      console.log('FETCH_NEWS...', { ...state, feed: action.articles.data.articles, loading: false })
      return { ...state, feed: action.articles.data.articles, loading: false }

    case 'LOADING_SEARCH':
      console.log('LOADING_SEARCH...', { ...state, loading: true })
      return { ...state, loading: true }

    case 'FETCH_SEARCH':
      console.log('FETCH_SEARCH...', { ...state, feed: action.articles.data.articles, loading: false })
      return { ...state,
                  feed: action.articles.data.articles,
                  numberOfSearchResults: action.articles.data.articles.length,
                  searchQuery: action.searchQuery,
                  loading: false
             }

    case 'CLEAR_FEED':
      console.log('CLEAR_FEED', { ...state, feed: [], numberOfSearchResults: 0, searchQuery: '', loading: false } )
      return { ...state, feed: [], numberOfSearchResults: 0, searchQuery: '', loading: false }

    case 'LOADING_SAVES':
      console.log('LOADING_SAVES...', { ...state, loading: true })
      return { ...state, loading: true }

    case 'FETCH_SAVES':
      console.log('FETCH_SAVES...', { ...state, saves: action.saves.data.data, loading: false }  )
      return { ...state, saves: action.saves.data.data, loading: false }

    case 'LOADING_SAVE':
      console.log('LOADING_SAVE...', { ...state, loading: true })
      return { ...state, loading: true }

    case 'ADD_SAVE':
      const save = {
        source: action.save.data.data.source,
        author: action.save.data.data.author,
        title: action.save.data.data.title,
        description: action.save.data.data.description,
        url: action.save.data.data.url,
        urlToImage: action.save.data.data.urlToImage,
        publishedAt: action.save.data.data.publishedAt
      }
      console.log('ADD SAVE...', { ...state, saves: state.saves.concat(save) })
      return { ...state, saves: state.saves.concat(save) };

    case 'DELETE_SAVE':
      const saves = state.saves.filter(save => save.id !== action.save.data.data.id)

      console.log('DELETE_SAVE...', { ...state, saves })
      return { ...state, saves }

    default:
      return state;
  }
}

export default articles_reducer;
