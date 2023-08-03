import React from 'react'
import ReactDOM from 'react-dom/client'
import Activity from './components/Activity/activity.jsx'
import './index.css'

let root = ReactDOM.createRoot(document.getElementById("root"))
let content = <Activity/>
root.render(content)