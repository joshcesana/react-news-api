import dummy_data from './dummy_data';
import cuid from 'cuid';
export const cuidFn = cuid;

const initState = {
  saves: [],
  feed: dummy_data
}

const articles_reducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_SAVE':
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
