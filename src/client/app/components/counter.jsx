import React from 'react';
import PropTypes from 'prop-types';

const CounterComponent = props => (<div>
  <button onClick={props.increment}>Increment</button>
  <button onClick={props.decrement}>Decrement</button>
  <span>{props.value}</span>
</div>);

CounterComponent.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default CounterComponent;
