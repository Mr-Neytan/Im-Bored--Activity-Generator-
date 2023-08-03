import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom"
import "./activity.css"
import History  from '../History/History'
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Activity = () => {
    const [act, setAct] = useState("What should you do today?")
    const [history, setHistory] = useState([]);
    const [participants, setParticipants] =useState(1)
    const [value, setValue] = useState("recreational")
    const [active, setActive] =useState("none")
    const [slidervisible, setSliderVisible] =useState(true)
    const [radiovisible, setRadioVisible] =useState(true)
    function handleClick(active, type, participants) {
        console.log("clicked")
        var link;
        if (active === "type"){
            link = `https://www.boredapi.com/api/activity?type=${type}`
        } else if (active === "participants") {
            link = `https://www.boredapi.com/api/activity?participants=${participants}`
        } else {
            link = "https://www.boredapi.com/api/activity"
        }
        console.log(link)
        fetch(link)
        .then( res => res.json())
        .then( json => {
            const newActivity = json.activity
            console.log(json.type)
            setHistory(prevHistory => [...prevHistory, newActivity]);
            setAct(newActivity);})
    }
    useEffect(() => {
        if (active === "type") {
            setRadioVisible(false);
            setSliderVisible(true);
        } else if (active === "participants") {
            setSliderVisible(false);
            setRadioVisible(true);
        } else {
            setSliderVisible(true);
            setRadioVisible(true);
        }
    }, [active]);

    useEffect(() => {
        console.log(`Slider is set at ${participants}`)
        console.log(`type is now ${value}`)
    }, [participants, value])

    function clearhistory() {
        setHistory([])
    }
    const updateParticipants=(e, num)=>{
        setParticipants(num)
    }
    const handleChange = (event, change) => {
        setValue(change);
    };
    const handleMain = (event, newchange) => {
        setActive(newchange);
    };
    return (
        <div>
       <p>{act}</p>
       <button onClick={() => handleClick(active, value, participants)}>I'm Bored...</button>
       <div>
       <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Generate an activity based on:</FormLabel>
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={active}
            onChange={handleMain}
        >
            <FormControlLabel value="participants" control={<Radio />} label="No. of Participants" />
            <FormControlLabel value="type" control={<Radio />} label="Nature of Activity" />
            <FormControlLabel value="none" control={<Radio />} label="Neither" />
        </RadioGroup>
        </FormControl>
       </div>
       <div style={{width:300}}>
        <p>No. of Participants</p>
       <Slider disabled={slidervisible}
       class = "Slider"
       min={1}
       max={5}
       value={participants}
       onChange={updateParticipants}
       aria-label="default"
       valueLabelDisplay="auto"
       />
       </div>
       <div>
       <FormControl disabled={radiovisible}>
        <FormLabel id="demo-controlled-radio-buttons-group">Type</FormLabel>
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
        >
            <FormControlLabel value="education" control={<Radio />} label="Education" />
            <FormControlLabel value="recreational" control={<Radio />} label="Recreational" />
        </RadioGroup>
        </FormControl>
       </div>
       <History n={history}/>
       <button onClick={() => clearhistory()}>clear</button>
        </div>
)
  
}

export default Activity