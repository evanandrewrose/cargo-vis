import CounterComponent from 'components/counter';
import { connect } from 'react-redux';
import actions from 'actions/actions';

function mapStateToProps(state) {
  return {
    value: state.count,
  };
}

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement()),
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);

export default CounterContainer;
