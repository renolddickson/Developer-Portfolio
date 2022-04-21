import {useState,React } from 'react'
import { Link } from 'react-router-dom';
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
            <Link to="/"><li>Home</li></Link>
            <Link to="/skill"><li>Skills</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
        </div>
        <div className="nav-contain">
        <div className="nav">
            <ul>
            <Link to="/"><li><FaHome className='fahome' /><span id={isActive ? "heading" : 'heading-show'}>Home</span></li></Link>
            <Link to="/skill"><li><FaJsSquare className='faskill' /><span id={isActive ? "heading" : 'heading-show'}>Skills</span></li></Link>
            <Link to="/projects"><li><FaBiohazard className='faproject' /><span id={isActive ? "heading" : 'heading-show'}>Projects</span></li></Link>
            <Link to="/contact"><li><FaTelegramPlane className='facontact'/><span id={isActive ? "heading" : 'heading-show'}>Contact</span></li></Link>
            </ul>
            <button onClick={handleToggle} className={isActive ? 'normal' : 'invert'}><img src={arrow} /></button>
        </div>
        </div>
    </div>
  )
}
export default Navbar;
