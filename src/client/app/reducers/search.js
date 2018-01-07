import {
  UPDATE_SEARCH,
} from 'constants/types';

const search = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload.search;
    default:
      return state;
  }
};

export default search;
