import React from 'react'
import {BsLinkedin, BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='http://linkedin.com' target='_blank'><BsLinkedin /></a>
        <a href='http://github.com' target='_blank'><FaGithub /></a>
        <a href='http://instagram.com' target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial