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
            const newActivity = JSON.stringify(json.activity)
            setHistory(prevHistory => [...prevHistory, newActivity]);
            setAct(newActivity);})
    }
    
    return (
        <div>
       <p>{act}</p>
       <button onClick={() => handleClick()}>click me</button>
       <History n={history}/>
        </div>
)
  
}

export default Activity