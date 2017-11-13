import { combineReducers } from 'redux';
import count from 'reducers/count';

const reducer = combineReducers({
  count,
});

export default reducer;
