import React,{useState} from 'react'
import { NavLink ,Link} from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {

    const [openMenu,SetopenMenu] = useState(false);
    return (
        <nav>
            <Link to="/home" className='title'>
                Home
            </Link>
            <ul className={openMenu ? "open":""}>
                <li>
                    <NavLink to="/about" onClick={()=>SetopenMenu(!openMenu)}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/services" onClick={()=>SetopenMenu(!openMenu)}>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={()=>SetopenMenu(!openMenu)}>Contact</NavLink>
                </li>
            </ul>
            <div className={openMenu?"menu cross":"menu"} onClick={()=>SetopenMenu(!openMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar