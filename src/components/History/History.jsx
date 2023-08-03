import React from 'react'

const History = (props) => {
  return (
    <div>History
        <ul>
        {props.n.map((gawain, index) => (
        <li key={index}>{gawain}</li>
      ))}
        </ul>
    </div>
  )
}

export default History