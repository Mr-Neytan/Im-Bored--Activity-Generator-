import React from 'react'
import ReactDOM from 'react-dom/client'
import Activity from './components/Activity/activity.jsx'
import Header from './components/Header/Header.jsx'
import './index.css'

let header_root = ReactDOM.createRoot(document.getElementById("head"))
header_root.render(<Header/>)

let root = ReactDOM.createRoot(document.getElementById("root"))
let content = <Activity/>
root.render(content)