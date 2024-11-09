//import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from "./pages/Login";
import Members from "./pages/Members";
import News from "./pages/News";
import StudentForum from "./pages/StudentForum";
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[3vw] lg:py-[-6px]">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Login" element={<Login />} />
      <Route path="Members" element={<Members />} />
      <Route path="News" element={<News />} />
      <Route path="StudentForum" element={<StudentForum />} />
      
    </Routes>
    </div>
  );
}

export default App;

