import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import './index.css'
import Reseach from './Reseach.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <About />
    <Reseach />
  </React.StrictMode>,
)
