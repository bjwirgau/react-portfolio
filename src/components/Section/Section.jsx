import './Section.css'

function Section({ sectionId }) {
  return (
    <section id={sectionId} className="section__content">
      <h2>{sectionId}</h2>
    </section>
  )
}

export default Section
