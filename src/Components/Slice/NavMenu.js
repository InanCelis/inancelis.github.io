import { NavLink } from "react-router-dom";
function NavMenu() {
  
    
    return (
        <nav>
            <NavLink to="/project" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink>
            <NavLink to="/details" className={({ isActive }) => (isActive ? 'active' : '')}>Details</NavLink>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>Resume</NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </nav>
      
    )
}

export default NavMenu;