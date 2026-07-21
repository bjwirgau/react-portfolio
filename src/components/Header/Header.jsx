import { useEffect, useState } from 'react'
import './Header.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = navItems.map(({ href }) => href.slice(1))
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)
    const visibility = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.intersectionRatio)
        })

        const mostVisibleSection = sectionIds.reduce((mostVisible, sectionId) => {
          const mostVisibleRatio = visibility.get(mostVisible) ?? 0
          const sectionRatio = visibility.get(sectionId) ?? 0

          return sectionRatio > mostVisibleRatio ? sectionId : mostVisible
        }, sectionIds[0])

        if ((visibility.get(mostVisibleSection) ?? 0) > 0) {
          setActiveSection(mostVisibleSection)
        }
      },
      {
        rootMargin: '-72px 0px 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Main navigation">
        <ul className="site-header__links">
          {navItems.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1)

            return (
              <li key={label}>
                <a
                  className={isActive ? 'site-header__link--active' : undefined}
                  href={href}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
