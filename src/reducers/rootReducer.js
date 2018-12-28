import { combineReducers } from 'redux';
import saves from './savesReducer';
import articles from './articlesReducer';

const rootReducer = combineReducers({
  saves,
  articles
})

export default rootReducer;
