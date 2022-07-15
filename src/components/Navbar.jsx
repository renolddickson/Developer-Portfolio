import {useState,React } from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome ,FaTelegramPlane,FaJsSquare,FaBiohazard} from 'react-icons/fa';
import './nav.css'
import arrow from './arrow.png'
const  Navbar =() => {
    const [isActive, setActive] = useState("false");
    const handleToggle = () => {
      setActive(!isActive);  };
  return (
    <div className='nav-container'>
        <div className="navbar">
        <ul>
            <NavLink to="/" ><li>Home</li></NavLink>
            <NavLink to="/skill"><li>Skills</li></NavLink>
            <NavLink to="/projects"><li>Projects</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>
        </div>
        <div className="nav-contain">
        <div className="nav">
            <ul>
            <NavLink to="/"><li><FaHome className='fahome' /><span id={isActive ? "heading" : 'heading-show'}>Home</span></li></NavLink>
            <NavLink to="/skill"><li><FaJsSquare className='faskill' /><span id={isActive ? "heading" : 'heading-show'}>Skills</span></li></NavLink>
            <NavLink to="/projects"><li><FaBiohazard className='faproject' /><span id={isActive ? "heading" : 'heading-show'}>Projects</span></li></NavLink>
            <NavLink to="/contact"><li><FaTelegramPlane className='facontact'/><span id={isActive ? "heading" : 'heading-show'}>Contact</span></li></NavLink>
            </ul>
            <button onClick={handleToggle} className={isActive ? 'normal' : 'invert'}><img src={arrow} /></button>
        </div>
        </div>
    </div>
  )
}
export default Navbar;
