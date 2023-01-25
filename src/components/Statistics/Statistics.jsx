import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.module.css';

const Statistics = ({ state, total, percentPositive }) => {
  const { good, neutral, bad } = state;
  return (
    <>
      <p>Good: {good} </p>
      <p>Neutral: {neutral}</p>
      <p>Bad:{bad} </p>
      <p>Total:{total} </p>
      <p>
        Positive feedback:
        {percentPositive} %{' '}
      </p>
    </>
  );
};

Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  percentPositive: PropTypes.number.isRequired,
};

export default Statistics;
