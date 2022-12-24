import { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

const Feedback = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        setgood(ps => ps + 1);
        break;
      case 'neutral':
        setneutral(ps => ps + 1);
        break;
      case 'bad':
        setbad(ps => ps + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + good + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(((good + neutral) * 100) / (bad + good + neutral));
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default Feedback;
