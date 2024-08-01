import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './NavBar.css';

export default function NavBar() {
    return <nav className="nav">
        <Link to="/" className="site-title">My Portfolio</Link>
        <ul className="NavBar">
            <li className="Resume">
                <a href='/Han Yu Foong Resume.pdf' download>Resume</a>
            </li>
            <li className="About">
                <CustomLink to="/About" >About</CustomLink>
            </li>
            <li className="Projects">
                <CustomLink to="/Projects" >Projects</CustomLink>
            </li>
            <li className="Contact">
                <CustomLink to="/Contact" >Contact</CustomLink>
            </li>
        </ul>
    </nav>
}

function CustomLink ({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path : resolvedPath.pathname, end: true })

    return (
        <li className = {isActive ? "active" : ""}>
            <Link to={to} {...props} >
                {children}
            </Link>
        </li>
    )
}