import { combineReducers } from 'redux';
import nodes from 'reducers/nodes';
import search from 'reducers/search';

const reducer = combineReducers({
  nodes,
  search,
});

export default reducer;
