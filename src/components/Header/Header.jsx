import './Header.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Main navigation">
        <ul className="site-header__links">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
