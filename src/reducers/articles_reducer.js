import cuid from 'cuid';
export const cuidFn = cuid;

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
      // debugger;
      console.log('LOADING_SAVES...', { ...state, loading: true })
      return { ...state, loading: true }

    case 'FETCH_SAVES':
      // debugger;
      console.log('FETCH_SAVES...', { ...state, saves: action.saves.data.data, loading: false }  )
      return { ...state, saves: action.saves.data.data, loading: false }

    case 'LOADING_SAVE':
      debugger;
      console.log('LOADING_SAVE...', { ...state, loading: true })
      return { ...state, loading: true }

    case 'ADD_SAVE':
      debugger;
      const save = {
        source: action.save.source.name,
        author: action.save.author,
        title: action.save.title,
        description: action.save.description,
        url: action.save.url,
        urlToImage: action.save.urlToImage,
        publishedAt: action.save.publishedAt,
        isSaved: true,
        id: cuid()
      }
      console.log('ADD SAVE...', { ...state, saves: state.saves.concat(save) })
      return { ...state, saves: state.saves.concat(save) };

    default:
      return state;
  }
}

export default articles_reducer;
