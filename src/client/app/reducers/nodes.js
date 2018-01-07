import {
  FETCH_DEPENDENCIES_SUCCESS,
  FETCH_DEPENDENCIES_LOADING,
  CLEAR_NODES,
} from 'constants/types';
import { uniq } from 'underscore';

const initialState = {
  source: '',
  nodes: [],
  links: [],
  doneLoading: false,
};

const nodes = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_NODES:
      return {
        ...state,
        nodes: [],
        links: [],
      };
    case FETCH_DEPENDENCIES_LOADING:
      return {
        ...state,
        source: action.payload.name,
        nodes: uniq(
          [
            ...state.nodes,
            { id: action.payload.name, group: 0 },
          ],
          false,
          node => node.id,
        ),
      };
    case FETCH_DEPENDENCIES_SUCCESS:
      return {
        ...state,
        nodes: uniq(
          [
            ...state.nodes,
            ...action.payload.result.dependencies.map(dep => (
              { id: dep.crate_id, group: action.payload.result.name }
            )),
          ],
          false,
          node => node.id,
        ),
        links: uniq(
          [
            ...state.links,
            ...action.payload.result.dependencies.map(dep => (
              {
                source: action.payload.result.name,
                target: dep.crate_id,
              }
            )),
          ],
          false,
          link => `${link.source} => ${link.target}`,
        ),
      };
    default:
      return state;
  }
};

export default nodes;
