import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/no-bg-profile.png'
import HeaderSocial from './HeaderSocial'
import { ReactTyped } from 'react-typed' 

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Asjad Reza</h1>
        <h5 className='text-light' style={{fontSize: '1.1rem'}}>
          <ReactTyped
            strings={[
              'Frontend Developer',
              'Backend Developer',
              'GEN AI Developer',
              'Cloud Computing Enthusiast',
              'DevOps Enthusiast'
            ]}
            typeSpeed={80}
            backSpeed={40}
            backDelay={1500}
            loop
          />
        </h5>

        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header