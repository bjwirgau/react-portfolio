import './Section.css'

function Section({ sectionId }) {
  function getSectionClass() {
    return `section__content section__content--${sectionId}`
  }

  return (
    <section id={sectionId} className={getSectionClass()}>
      <h2>{sectionId}</h2>
    </section>
  )
}

export default Section
