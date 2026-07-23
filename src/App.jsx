import Header from './components/Header/Header.jsx'
import Section from "./components/Section/Section.jsx";
import ProgressBar from "./components/Progress/ProgressBar.jsx";
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="sections-container">
        <Section sectionId="home"/>
        <Section sectionId="about"/>
        <Section sectionId="projects"/>
        <Section sectionId="skills"/>
        <Section sectionId="contact"/>
      </div>
    </>
  )
}

export default App
