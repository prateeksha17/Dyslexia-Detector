import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Tests from './pages/Tests';
import Gallery from './pages/Gallery';
import Navbar from './Components/Navbar';
import Team from './pages/Team';
import About from './pages/About';
import Feature from './pages/Feature';
import Contact from './pages/Contact';
import Home from './pages/Home';
import LangSkills from './pages/Tests/LangSkills';

function App() {
  return (
    <div className="App">
   <Navbar/>
  
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/langSkills" element={<LangSkills />} />
         
        
        </Routes>
  
    </div>
  );
}

export default App;
