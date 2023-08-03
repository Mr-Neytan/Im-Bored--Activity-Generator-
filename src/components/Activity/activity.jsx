import React, { useEffect, useState } from 'react'
import History  from '../History/History'
const Activity = () => {
    const [act, setAct] = useState("What should you do today?")
    const [history, setHistory] = useState([]);
    function handleClick() {
        console.log("clicked")
        fetch("https://www.boredapi.com/api/activity")
        .then( res => res.json())
        .then( json => {
            const newActivity = json.activity
            setHistory(prevHistory => [...prevHistory, newActivity]);
            setAct(newActivity);})
    }
    function clearhistory() {
        setHistory([])
    }
    return (
        <div>
       <p>{act}</p>
       <button onClick={() => handleClick()}>I'm Bored...</button>
       <History n={history}/>
       <button onClick={() => clearhistory()}>clear</button>
        </div>
)
  
}

export default Activity