import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = name => {
    setState(state => ({ ...state, [name]: state[name] + 1 }));
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const percentPositiveFeedback = () => {
    const { good } = state;
    if (good === 0) {
      return 0;
    }
    return Math.round((good * 100) / totalFeedback());
  };
  const options = Object.keys(state);
  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback() ? (
          <Statistics
            state={state}
            total={totalFeedback()}
            percentPositive={percentPositiveFeedback()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
