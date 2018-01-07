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
      gravitationalConstant: -26,
      centralGravity: 0.005,
      springLength: 230,
      springConstant: 0.18,
    },
    maxVelocity: 146,
    solver: 'forceAtlas2Based',
    timestep: 0.35,
    stabilization: { iterations: 150 },
  },
};

const GraphComponent = props => (
  <Graph
    style={{
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
