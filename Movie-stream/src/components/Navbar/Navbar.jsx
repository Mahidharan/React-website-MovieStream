import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import profile from '../../assets/images.png'
import { FaSearch, FaBell } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa'; // or FaAngleDown



const Navbar = () => {

  const navRef = useRef();
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      } else{
        navRef.current.classList.remove('nav-dark')
      }




    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
      <FaSearch size={20}/>
      <p>children</p>
      <FaBell size={20}/>
     
  <div className="navbar-profile">
   <img src={profile} alt="" className='profile' />
   <FaChevronDown size={20} style={{ marginLeft: '1px' }} />

          <div className="dropdown">
            <p>Sign Out of Stream</p>
          </div>

       </div>
      </div>
    </div>
  )
}

export default Navbar
