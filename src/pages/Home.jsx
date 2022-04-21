import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { useEffect,useState } from 'react'
import Typewriter from 'typewriter-effect'
import './css/home.css'
import { motion } from 'framer-motion';
import Resume from '../components/Antony Renold Dickson K.pdf'
import Sun from './Sun'
import './css/style.css'

export default function Home() {
  const [isloading,setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },3000);
  },[]);
    return (
        <motion.div className='sky'
        >
        <div className="title">
          <h1 className='name'>Hi, I'm<br /><span className='color'><Typewriter
  options={{
    strings: ['Antony Renold Dickson', 'Web Developer','App Developer','UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/></span>
</h1>
        </div>
      <a href={Resume} download ><button className='cv-btn'>Download CV</button></a>
      <div className="nav-contain">
  <Navbar />
  </div>
  <div className="suncontainer">
  <Sun />
  </div>
  
      </motion.div>
    )
  }
