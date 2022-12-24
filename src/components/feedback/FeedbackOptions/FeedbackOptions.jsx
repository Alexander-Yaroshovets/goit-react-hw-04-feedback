import PropTypes from 'prop-types';

import {
  FeedbackOptionList,
  FeedbackOptionItem,
  FeedbackButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionList>
      {options.map(option => (
        <FeedbackOptionItem key={option}>
          <FeedbackButton type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackButton>
        </FeedbackOptionItem>
      ))}
    </FeedbackOptionList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
