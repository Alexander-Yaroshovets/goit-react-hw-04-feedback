import PropTypes from 'prop-types';

import {
  StatisticCard,
  StatisticList,
  StatisticItem,
  StatisticText,
} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <StatisticCard>
      <StatisticList>
        <StatisticItem>
          <StatisticText> Good: {good}</StatisticText>
        </StatisticItem>
        <StatisticItem>
          <StatisticText> Neutral: {neutral}</StatisticText>
        </StatisticItem>
        <StatisticItem>
          <StatisticText>Bad: {bad}</StatisticText>
        </StatisticItem>
        <StatisticItem>
          <StatisticText> Total: {total}</StatisticText>
        </StatisticItem>
        <StatisticItem>
          <StatisticText>
            Positive feedback: {total > 0 ? positiveFeedback : 0}%
          </StatisticText>
        </StatisticItem>
      </StatisticList>
    </StatisticCard>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
