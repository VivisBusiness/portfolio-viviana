import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutMe from './sections/AboutMe/AboutMe'
import Contact from './sections/Contact/Contact'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
