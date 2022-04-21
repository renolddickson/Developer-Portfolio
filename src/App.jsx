import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import {BrowserRouter as Router,Routes,Route,Navigate, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export default function App() {

  return <AnimatePresence>
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/skill" element={<Skills />}/>
      <Route exact path="/projects" element={<Projects />}/>
      <Route exact path="/contact" element={<Contact />}/>
      <Route path="*" element={<Navigate replace to="/" />}/>
    </Routes>
  </Router>
    </AnimatePresence>;
}
