import GraphComponent from 'components/graph';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPackage } from 'actions/actions';

const mapStateToProps = state => ({
  nodes: state.nodes.nodes,
  links: state.nodes.links,
  doneLoading: state.nodes.doneLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchPackage: () => dispatch(fetchPackage('cleye')),
});

class GraphWrapper extends React.Component {
  componentWillMount() {
    this.props.fetchPackage();
  }

  render() {
    return <GraphComponent {...this.props} />;
  }
}

GraphWrapper.propTypes = {
  fetchPackage: PropTypes.func.isRequired,
};

const GraphContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphWrapper);

export default GraphContainer;
