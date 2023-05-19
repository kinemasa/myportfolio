import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <About />
  </React.StrictMode>,
)
