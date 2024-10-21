import { useState } from 'react'

const Button = ({handleClick, text}) =>{
  return(
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({text, value}) => (
  <p>{text} {value}</p>
)

const Statistics = ({good,neutral,bad}) =>{

  const total = good + bad + neutral
  const average = (good-bad) / total
  const positive = good / total * 100

  if(total === 0){
    return(
      <p>No feedback given</p>
    )
  }

  return(
    <div>
      <StatisticLine text = "good" value = {good}/>
      <StatisticLine text = "neutral" value = {neutral}/>
      <StatisticLine text = "bad" value = {bad}/>
      <StatisticLine text = "all" value = {total}/>
      <StatisticLine text = "average" value = {average}/>
      <StatisticLine text = "positive" value = {positive}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"></Button>
      <Button handleClick={handleNeutral} text="neutral"></Button>
      <Button handleClick={handleBad} text="bad"></Button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App