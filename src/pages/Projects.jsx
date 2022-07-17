import React from 'react'
import './css/style.css'
import Navbar from '../components/Navbar'
import './css/project.css'
import Weathericon from './images/001.png'
import searcher from './images/002.png'
import mark from './images/003.png'
import classroom from './images/004.png'
import Assistant from './images/005.jpg'
import todo from './images/006.png'
import Diary from './images/007.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Projects() {
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);
  return (
    <div className='project' >
       <div className="nav-contain">
  <Navbar />
  </div>
  <div className="heading">
    <h2>My Works</h2></div>
    <div className="project_container">
 <div className="projects-info">
    <a href="https://smarthood.github.io/climate/" target="_blank" >
   <div data-aos="fade-left" className="card">
   <div className="card_container">
     <span className="app-title">Weather App</span>
     <spn className="description">Technology used: Reactjs, API</spn>
     </div>
     <span className="app-icon">
       <img src={Weathericon} alt="weather-icon" />
     </span>
   </div>
    </a>
   {/* Card ends here  */}
   <a href="https://smarthood.github.io/smartsearch/" target="_blank" >
   <div data-aos="fade-right" className="card">
   <div className="card_container">
     <span className="app-title">Smart searcher</span>
     <spn className="description">Technology used: Reactjs</spn>
     </div>
     <span className="app-icon">
       <img src={searcher} alt="searcher" />
     </span>
   </div>
    </a>
   {/* Card ends here  */}
   <a href="https://github.com/smarthood/smteccore" target="_blank" >
   <div data-aos="fade-left" className="card">
   <div className="card_container">
     <span className="app-title"> Student Mark</span>
     <spn className="description">Technology used: Reactjs, SheetAPI</spn>
     </div>
     <span className="app-icon">
       <img src={mark} alt="mark" id='markicon'/>
     </span>
   </div>
    </a>
   {/* Card ends here  */}
   <a href="https://github.com/smarthood/cseclassroom" target="_blank" >
   <div data-aos="fade-right" className="card">
   <div className="card_container">
     <span className="app-title">Classroom Clone</span>
     <spn className="description">Technology used: MERN</spn>
     </div>
     <span className="app-icon">
       <img src={classroom} alt="classroom-icon" />
     </span>
   </div>
    </a>
   {/* Card ends here  */}
   <a href="https://github.com/smarthood/spidy_voice_assistant" target="_blank" >
   <div data-aos="fade-left" className="card">
   <div className="card_container">
     <span className="app-title">Virtual Assistant</span>
     <spn className="description">Technology used: Reactjs</spn>
     </div>
     <span className="app-icon">
       <img src={Assistant} alt="assistant" />
     </span>
   </div>
    </a>
   {/* Card ends here  */}
   <a href="https://expo.dev/accounts/smartdickson/projects/kanaku/builds/8eeb8f74-e213-4b67-a389-657c529e976a" target="_blank" >
   <div data-aos="fade-right" className="card">
   <div className="card_container">
     <span className="app-title">Dept List</span>
     <spn className="description">Technology used: React Native</spn>
     </div>
     <span className="app-icon">
       <img src={todo} alt="todo" />
     </span>
   </div>
    </a>
   {/* Card ends here  */}
   <a href="https://github.com/smarthood/Diary2.0" target="_blank" >
   <div data-aos="fade-left" className="card">
   <div className="card_container">
     <span className="app-title">Diary 2.0</span>
     <spn className="description">Technology used: Reactjs, Firebase</spn>
     </div>
     <span className="app-icon">
       <img src={Diary} alt="Diary-icon" />
     </span>
   </div>
    </a>
   {/* Card ends here  */}
 </div>
 </div>
</div>
  )
}
