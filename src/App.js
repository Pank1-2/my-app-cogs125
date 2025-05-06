import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link> 
          <Link to="/projects" className="nav-link">Projects</Link> 
          <a href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
