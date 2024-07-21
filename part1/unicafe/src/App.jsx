import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={positive} />
    </div>
  );
};

const Button = ({ increaseValue, value }) => {
  return (
    <>
      <button onClick={increaseValue}>{value}</button>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    const addGood = good + 1;
    setGood(addGood);
  };

  const increaseNeutral = () => {
    const addNeutral = neutral + 1;
    setNeutral(addNeutral);
  };

  const increaseBad = () => {
    const addBad = bad + 1;
    setBad(addBad);
  };

  const all = good + neutral + bad;
  const average = all !== 0 ? (good - bad) / all : 0;
  const positive = all !== 0 ? (good / all) * 100 : 0;

  console.log(average);
  console.log(positive);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button increaseValue={increaseGood} value="Good" />
      <Button increaseValue={increaseNeutral} value="Neutral" />
      <Button increaseValue={increaseBad} value="Bad" />
      <br />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
