import React from 'react';
import GraphContainer from 'containers/graph-container';
import SearchContainer from 'containers/search-container';
import { Grid, Segment, List } from 'semantic-ui-react';

const Application = () => (
  <div style={{ height: '100vh', overflow: 'hidden' }}>
    <Grid style={{ padding: 0, margin: 0 }}>
      <Grid.Row stretched style={{ margin: 0, width: '100%', backgroundColor: '#2C303C' }}>
        <Grid.Column>
          <SearchContainer hideButton />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row stretched style={{ padding: 0, margin: 0 }}>
        <Grid.Column stretched style={{ padding: 0, margin: 0 }}>
          <GraphContainer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Application;

