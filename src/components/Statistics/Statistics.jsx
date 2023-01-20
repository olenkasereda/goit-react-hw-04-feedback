import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentPositive }) => {
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
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentPositive: PropTypes.number.isRequired,
};

export default Statistics;
