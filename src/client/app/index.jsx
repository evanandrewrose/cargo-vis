import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'reducers';
import GraphContainer from 'containers/graph-container';
import SearchContainer from 'containers/search-container';
import { Grid, Segment, List } from 'semantic-ui-react';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

const Application = (
  <Provider store={store}>
    <div>
      <Grid style={{ padding: 0, margin: 0, height: '100%' }}>
        <Grid.Column width={13} style={{ padding: 0, margin: 0 }}>
          <GraphContainer />
        </Grid.Column>
        <Grid.Column width={3} style={{ backgroundColor: '#2C303C' }}>
          <SearchContainer />
          <Segment inverted>
            This is a demonstration of vis.js, react, and redux. Search above for any
            <a href="https://crates.io/"> crates.io </a> package and the dependencies will appear on
            the left.

            <br /><br />

            For now, the depth tree is limited to 3 for performance reasons. Try searching `cargo`.
          </Segment>
          <Segment inverted>
            Resources:<br />
            <List>
              <List.Item><a href="https://crates.io/">crates.io</a></List.Item>
              <List.Item><a href="http://visjs.org/">visjs.org</a></List.Item>
              <List.Item><a href="https://github.com/crubier/react-graph-vis">react-graph-vis</a></List.Item>
              <List.Item><a href="https://reactjs.org/">reactjs.org</a></List.Item>
              <List.Item><a href="https://redux.js.org/">redux.js.org</a></List.Item>
              <List.Item><a href="http://www.react.semantic-ui.com">react.semantic-ui.com</a></List.Item>
            </List>
          </Segment>
          <Segment inverted>
            <a href="http://www.9tabs.com">9tabs.com</a>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  </Provider>
);

ReactDOM.render(Application, document.getElementById('app'));
