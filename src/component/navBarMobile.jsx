import '../css/navBar.css'
import { LiaHomeSolid, LiaDumbbellSolid, LiaEnvelopeSolid } from 'react-icons/lia'

const NavBarMobile = () => {
    return (
        <nav className="navbar mobile-nav">
            <h1 className="nav-brand">SSS</h1>
            <ul className="nav-links">
                <li><a href="#"><LiaHomeSolid size={24} /></a></li>
                <li><a href="#workout"><LiaDumbbellSolid size={24} /></a></li>
                <li><a href="#contact"><LiaEnvelopeSolid size={24} /></a></li>
            </ul>
        </nav>
    )
}

export default NavBarMobile