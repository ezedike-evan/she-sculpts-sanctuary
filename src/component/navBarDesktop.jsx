import '../css/navBar.css'
const NavBarDesktop = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-brand">SHE SCULPTS</h1>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#workout">Programs</a></li>
        <li><a href="#stories">Stories</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="nav-cta"><a href="#contact">Book Now</a></li>
      </ul>
    </nav>
  )
}

export default NavBarDesktop