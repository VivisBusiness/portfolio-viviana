import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutMe from './sections/AboutMe/AboutMe'
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
      <Footer />
    </>
  )
}

export default App
