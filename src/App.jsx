import Header from './components/Header/Header.jsx'
import './App.css'
import Section from "./components/Section/Section.jsx";

function App() {

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
