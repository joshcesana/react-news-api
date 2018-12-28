const initState = {
  saves: [],
}

export default function savesReducer(state = initState, action) {
  switch(action.type) {
    case 'FETCH_SAVES':
      return state;

    default:
      return state;
  }
}
