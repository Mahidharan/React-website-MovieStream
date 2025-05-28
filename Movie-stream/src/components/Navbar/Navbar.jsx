import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/images.png'
import { FaSearch, FaBell, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { logout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <FaSearch size={20} className='icon' />
        <p>children</p>
        <FaBell size={20} className='icon' />

        <div className="navbar-profile">
          <img src={profile} alt="profile" className='profile' />
          <FaChevronDown size={20} style={{ marginLeft: '1px' }} />

          <div className="dropdown">
            <p onClick={() => { logout() }}>Sign Out of Stream</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
