import './App.css';
import React, { useState } from "react";
import NavBar from './NavBar';
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </div>
    </div>
  );
}