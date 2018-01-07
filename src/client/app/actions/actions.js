import { actionCreator } from 'redux-action-creator';
import * as types from 'constants/types';

export const updateSearch = actionCreator(types.UPDATE_SEARCH, 'search');
export const clearNodes = actionCreator(types.CLEAR_NODES);

const fetchDependenciesLoading = actionCreator(types.FETCH_DEPENDENCIES_LOADING, 'name');
const fetchDependenciesSuccess = actionCreator(types.FETCH_DEPENDENCIES_SUCCESS, 'result');

export const fetchPackage = (name, cached = [], depth = 2) => (dispatch) => {
  dispatch(fetchDependenciesLoading(name));

  const corsAnywhere = 'https://cors-anywhere.herokuapp.com';
  const requestURL = `${corsAnywhere}/https://crates.io`;
  const url = `${requestURL}/api/v1/crates/${name}`;

  fetch(url)
    .then(response => response.json())
    .then((response) => {
      // TODO: make version choice configurable
      const { versions } = response;
      const current = versions[0];

      fetch(`${requestURL}/${current.links.dependencies}`)
        .then(dependenciesResponse => dependenciesResponse.json())
        .then((dependenciesResponse) => {
          const { dependencies } = dependenciesResponse;

          dispatch(fetchDependenciesSuccess({
            name: response.crate.id,
            dependencies,
          }));

          dependencies.forEach((dependency) => {
            // Make sure we haven't already cached this dependency or gone over our requested depth.
            if (!cached.includes(dependency.crate_id) && depth > 1) {
              dispatch(fetchPackage(dependency.crate_id, cached, depth - 1));
              cached.push(dependency.crate_id);
            }
          });
        });
    });
};
