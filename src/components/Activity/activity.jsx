import React, { useEffect, useState } from 'react'

const Activity = () => {
    const [act, setAct] = useState()

    useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
    .then( res => res.json())
    .then( json => setAct(JSON.stringify(json.activity)))
  }, []) 
    return (
    <div><div>{act}</div></div>
     
)
  
}

export default Activity