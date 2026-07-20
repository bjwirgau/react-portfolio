import './Section.css'

function Section({sectionId}) {
  return (
    <div className="section__content">
      <h2>{sectionId}</h2>
    </div>
  )
}

export default Section
