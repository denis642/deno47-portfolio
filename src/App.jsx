import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills/Skills'
import Interests from './Components/Interests/Interests'


const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <MyWork/>
        <Interests/>
        <Contact/>
        <Footer/>


    </div>
  )
}

export default App