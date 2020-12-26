import { Component } from 'react';
import FeedbackOptions from './Components/FeeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnIncrement = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const optionsName = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionsName}
            onLeaveFeedback={this.handleBtnIncrement}
          />

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={
              this.countPositiveFeedbackPercentage() > 0
                ? this.countPositiveFeedbackPercentage()
                : 0
            }
          />
        </Section>
      </>
    );
  }
}

export default App;
