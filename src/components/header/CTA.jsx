import React from 'react'
import CV from '../../assets/Asjad_Reza_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        {/* <a href={CV} target='blank' download className='btn'>Download CV</a> */}
        <a href={CV} target='blank' className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA