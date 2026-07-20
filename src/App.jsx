import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import './App.css'
import Section from "./components/Section/Section.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section sectionId="home"/>
      <Section sectionId="about"/>
      <Section sectionId="projects"/>
      <Section sectionId="contact"/>
    </>
  )
}

export default App
