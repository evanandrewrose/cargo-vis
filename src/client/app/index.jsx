import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'reducers';
import MediaQuery from 'react-responsive';
import DesktopApplication from 'desktop';
import MobileApplication from 'mobile';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

const Application = (
  <Provider store={store}>
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
        <div>
          <DesktopApplication />
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 1224px)">
        <div>
          <MobileApplication />
        </div>
      </MediaQuery>
    </div>
  </Provider>
);

ReactDOM.render(Application, document.getElementById('app'));
