import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import './App.css'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <div className='bg-slate-900'>
        <Navbar />
        <Banner />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
