import { useState } from "react";

const StatisticLine = ({ value }) => {
  return <div>{value}</div>;
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
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>
              <StatisticLine value={good} />
            </td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>
              <StatisticLine value={neutral} />
            </td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>
              <StatisticLine value={bad} />
            </td>
          </tr>
          <tr>
            <td>All</td>
            <td>
              <StatisticLine value={all} />
            </td>
          </tr>
          <tr>
            <td>Average</td>
            <td>
              <StatisticLine value={average} />
            </td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>
              <StatisticLine value={positive} />
            </td>
          </tr>
        </tbody>
      </table>
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
