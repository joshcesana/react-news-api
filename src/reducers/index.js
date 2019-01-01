import { combineReducers } from 'redux';
import articles_reducer from './articles_reducer';

const rootReducer = combineReducers({
  articles: articles_reducer
})

export default rootReducer;
