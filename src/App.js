import "./App.css";
import React from "react";
import ButtonFeedback from "./Components/ButtonFeedback";
import Statistics from "./Components/Statistics";
import PercentageFeedback from "./Components/PercantageFeedback";

class App extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeStatistisc = (e) => {
    console.dir(e.target);
    const { name } = e.target;

    this.setState((prevState) => {
      return {
        [name]: prevState.good + 1,
        [name]: prevState.neutral + 1,
        [name]: prevState.bad + 1,
      };
    });
  };

  percentageFeedback = () => {
    const { good, neutral, bad } = this.state;
    let summary = (100 / (good + neutral + bad)) * good;

    if (!summary) {
      summary = this.props.initialValue;
    }

    summary = Math.trunc(summary);
    return summary;
  };

  // handleClickButtonGood = (event) => {
  //   this.setState((prevState) => {
  //     return { good: prevState.good + 1 };
  //   });
  // };

  // handleClickButtonNeutral = (event) => {
  //   this.setState((prevState) => {
  //     return { neutral: prevState.neutral + 1 };
  //   });
  // };

  // handleClickButtonBad = (event) => {
  //   this.setState((prevState) => {
  //     return { bad: prevState.bad + 1 };
  //   });
  // };

  render() {
    const total = this.percentageFeedback();
    return (
      <div>
        <h2>Please leave feedback</h2>
        <ButtonFeedback
          onClickGood={this.changeStatistisc}
          onClickNeutral={this.changeStatistisc}
          onClickBad={this.changeStatistisc}
        />
        <Statistics
          title={"Statistics"}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
        <PercentageFeedback title={"Positive feedback"} percantage={total} />
      </div>
    );
  }
}

export default App;
