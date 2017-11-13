import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'reducers';
import CounterContainer from 'containers/counter-container';

const store = createStore(
    reducer
);


const Application = (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

ReactDOM.render(Application, document.getElementById('app'));
