import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Classes from './Classes';
import Projects from './Projects';
import Contact from './Contact';
import './index.css';

const App = () => (
  <Router>
    <header>
      <div className="container">
        <h1>Welcome to My Personal Website</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/classes">Courses</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <footer>
      <div className="container">
        <p>&copy; 2024 Professional Personal Website</p>
      </div>
    </footer>
  </Router>
);

export default App;
