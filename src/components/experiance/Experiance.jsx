import React from 'react'
import './experiance.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experiance = () => {
  return (
    <section id='experiance'>
      <h5>What skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Technologies</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Android Dev.</h4>
              <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of Backend */}

        <div className='experience_backend'>
        <h3>Languages</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>C</h4>
              <small className='text-light'>Expert</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiance