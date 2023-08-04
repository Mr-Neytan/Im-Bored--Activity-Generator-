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
import Button from '@mui/material/Button';

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
        <div class='main-content'>
       <h1>{act}</h1>
       <Button variant="contained" onClick={() => handleClick(active, value, participants)}>I'm Bored...</Button>
       </div>
       <div className='active-form'>
       <FormControl >
        <FormLabel id="demo-controlled-radio-buttons-group">Generate an activity based on:</FormLabel>
        <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="row-radio-buttons-group"
            value={active}
            onChange={handleMain}
        >
            <FormControlLabel value="participants" control={<Radio />} label="No. of Participants" />
            <FormControlLabel value="type" control={<Radio />} label="Nature of Activity" />
            <FormControlLabel value="none" control={<Radio />} label="Neither" />
        </RadioGroup>
        </FormControl>
       </div>
       <div className='two_types'>
       <div style={{width:300}} className='Slider'>
        <p>No. of Participants</p>
       <Slider className='slider_component' disabled={slidervisible}
       min={1}
       max={5}
       value={participants}
       onChange={updateParticipants}
       aria-label="default"
       valueLabelDisplay="auto"
       />
       </div>
       <div className='Radiobuttons'>
       <p>Type of Activity</p>
       <FormControl disabled={radiovisible}>
        <RadioGroup
        row
        style={{width:300}}
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
        >
            <FormControlLabel value="education" control={<Radio />} label="Education" />
            <FormControlLabel value="recreational" control={<Radio />} label="Recreational" />
            <FormControlLabel value="social" control={<Radio />} label="Social" />
            <FormControlLabel value="diy" control={<Radio />} label="DIY" />
            <FormControlLabel value="charity" control={<Radio />} label="Charity" />
            <FormControlLabel value="cooking" control={<Radio />} label="Cooking" />
            <FormControlLabel value="music" control={<Radio />} label="Music" />
            <FormControlLabel value="busywork" control={<Radio />} label="Busywork" />
        </RadioGroup>
        </FormControl>
       </div>
       </div>
       <div className='history'>
       <History n={history}/>
       <Button variant="outlined" onClick={() => clearhistory()}>clear</Button>
       </div>
        </div>
)
  
}

export default Activity