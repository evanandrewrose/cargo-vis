import { actionCreator } from 'redux-action-creator';
import types from 'constants/types';

const actions = {
  increment: actionCreator(types.INCREMENT),
  decrement: actionCreator(types.DECREMENT),
};

export default actions;
