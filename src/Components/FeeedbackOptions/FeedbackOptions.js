import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <button
        type="button"
        name="good"
        className={s.btn}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        className={s.btn}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        className={s.btn}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
