import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(previosState => previosState + 1);
        break;
      case 'neutral':
        setNeutral(previosState => previosState + 1);
        break;
      case 'bad':
        setBad(previosState => previosState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const percentPositiveFeedback = () => {
    if (good === 0) {
      return 0;
    }
    return Math.round((good * 100) / totalFeedback());
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
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
