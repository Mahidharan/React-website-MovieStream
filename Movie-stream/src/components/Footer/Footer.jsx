import React from 'react'
import './footer.css'
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
      <FaInstagram size={40} style={{cursor:'pointer'}}/>
        <FaFacebook size={40} style={{cursor:'pointer'}}/>
        <FaYoutube size={40} style={{cursor:'pointer'}}/>
        <FaTwitter size={40}  style={{cursor:'pointer'}}/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre </li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">© 2005-2025 MovieStream,Inc.</p>
    </div>
  )
}

export default Footer
