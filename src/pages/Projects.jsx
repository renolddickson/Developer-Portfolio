import React from 'react'
import './css/style.css'
import Navbar from '../components/Navbar'
import './css/project.css'
import Weathericon from './images/001.png'
import searcher from './images/search.png'

export default function Projects() {
  return (
    <div className='project'>
       <div className="nav-contain">
  <Navbar />
  </div>
  <div className="heading">
    <h2>My Works</h2></div>
 <div className="projects-info">
    <a href="https://smarthood.github.io/smartsearch/" target="_blank" >
   <div className="card">
   <div className="card_container">
     <span className="app-title">Smart searcher</span>
     <spn className="description">Technology used: Reactjs</spn>
     </div>
     <span className="app-icon">
       <img src={searcher} alt="weather-icon" />
     </span>
   </div>
    </a>
   {/* Card ends here  */}
 </div>
</div>
  )
}
