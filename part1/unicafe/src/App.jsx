import { useState } from 'react';

const Header = ({text}) => {
  return <h1>{text}</h1>
}

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>
}

const Statistic = ({text, value}) => {
  if (text == "positive") {
    return <p>{text} {value} %</p>
  }

  return <p>{text} {value}</p>
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;
  const positive = (good / total) * 100;

  if (total == 0) {
    return <p>No feedback given</p>
  } 
  
  return (
  <div>
    <Statistic text="good" value={good} />
    <Statistic text="neutral" value={neutral} />
    <Statistic text="bad" value={bad} />
    <Statistic text="all" value={total} />
    <Statistic text="average" value={average} />
    <Statistic text="positive" value={positive} />
  </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App;
