import React from 'react';
import PropTypes from 'prop-types';
import Graph from 'react-graph-vis';

const options = {
  nodes: {
    shape: 'dot',
    size: 6,
    font: {
      color: '#C1C8CB',
    },
  },
  physics: {
    forceAtlas2Based: {
      gravitationalConstant: -200,
      centralGravity: 0.05,
      springLength: 60,
      springConstant: 0.30,
    },
    maxVelocity: 146,
    minVelocity: 5,
    solver: 'forceAtlas2Based',
    timestep: 0.35,
    stabilization: {
      enabled: true,
      iterations: 1,
    },
  },
};

const GraphComponent = props => (
  <Graph
    style={{
      height: '100%',
      backgroundColor: '#1C1F28',
    }}
    graph={{
      nodes: props.nodes.map(node => ({ id: node.id, label: node.id, group: node.group })),
      edges: props.links.map(link => ({ from: link.source, to: link.target })),
    }}
    options={options}
  />
);

GraphComponent.propTypes = {
  doneLoading: PropTypes.bool.isRequired,
  nodes: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
};

export default GraphComponent;
