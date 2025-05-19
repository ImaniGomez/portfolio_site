import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link,  useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './styling/App.css';
import profilePic from './assets/profile-pic.jpeg';
import Tech from './tech/Tech';
import Film from './film/Film';
import About from './About';
import FilmPage from './film/FilmPage';

function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Film" element={<Film />} />
          <Route path="/films/:id" element={<FilmPage />} />
        </Routes>
        


      </>
    </Router>
  );
}

export default App;
