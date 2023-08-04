import React from 'react'
import './history.css'
const History = (props) => {
  let no_reps = new Set(props.n)
  let arr = Array.from(no_reps)
  return (
    <div>
      <p>History</p>
        <ul>
        {arr.map((gawain, index) => (
        <li key={index}>{gawain}</li>
      ))}
        </ul>
    </div>
  )
}

export default History