import React, { useRef } from 'react'
import './css/style.css'
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar'
import './css/contact.css'
import WaterWave from 'react-water-wave';
import image from './images/bg.jpg'
import insta from './images/insta.png'
import email from './images/email.png'
import  whatsapp from './images/whatsapp.png'

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e5olosv', 'template_v6ha9lp', form.current, 'uqRrk0ZjoRwRG1fM0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <div className="contact">
      <WaterWave imageUrl={image}>
      {() => (
        <div className='contact-container'>
         <div className="nav-contain">
  <Navbar />
  </div>
  <div className="form_container">
  <form ref={form} onSubmit={sendEmail}>
  <h2>Contact Me</h2>
    <label>Name</label>
<input type="name" name="name" placeholder='Your name'/>
<label>Email</label>
<input type="email" name="email" placeholder='Email address'/>
<label>Message</label>
<textarea name="message" placeholder='Type your message here...'/>
<button type="submit" className='submit_btn'>submit</button>
  </form>
  </div>
  <div className='footer'>
  <a href="mailto:renolddickson18@gmail.com" target="_blank">
    <img src={email} alt="email" className='email'/></a>
    <a href="https://www.instagram.com/renold_dickson/" target="_blank">
    <img src={insta} alt="Instagram" className='insta'/>
    </a>
    <a href="whatsapp://send?abid=+919361956434&text=Hello!" target="_blank">
    <img src={whatsapp} alt="whatsapp" className='whatsapp'/></a>
  </div>
  </div>
  )}
  </WaterWave>
  </div>
    )
  }
