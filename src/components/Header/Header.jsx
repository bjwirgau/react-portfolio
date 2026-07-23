import { useEffect, useState } from 'react'
import './Header.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sectionIds = navItems.map(({ href }) => href.slice(1))
    const headerOffset = 72

    const updateActiveSection = () => {
      const nextActiveSection = sectionIds.reduce((currentSection, sectionId) => {
        const sectionElement = document.getElementById(sectionId)

        if (!sectionElement) {
          return currentSection
        }

        const sectionTop = sectionElement.getBoundingClientRect().top

        return sectionTop <= headerOffset ? sectionId : currentSection
      }, sectionIds[0])

      setActiveSection(nextActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
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
                  className={isActive ? 'site-header__link--active site-header__link--' + label.toLowerCase() : undefined}
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
