const initState = {
  articles: [],
}

export default function articlesReducer(state = initState, action) {
  switch(action.type) {
    case 'FETCH_ARTICLES':
      return state;

    default:
      return state;
  }
}
