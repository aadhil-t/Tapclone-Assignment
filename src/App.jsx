import "@fontsource/inter"; 
import React from 'react'
import NavBar from './components/NavBar'
import Hero from "./components/Hero"
import About from './components/About'
import Courses from './components/Courses'
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Learner from "./components/Learner";

function App() {
  return (
    <div className='bg-[#090913]'>
      <NavBar/>
      <Hero/>
      <About/>
      <Courses/>
      <Learner/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
