import React from 'react'
import './footer.css'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ASJAD</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiance'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact us </a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebook /></a>
        <a href='https://instagram.com'><FaInstagram /></a>
        <a href='https://twitter.com'><BsTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; rezaasjad.com 2022</small>
      </div>
    </footer>
  )
}

export default Footer