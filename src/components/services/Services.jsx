import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I know</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>ML/AI</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I have interested in ML and data science.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to identify patterns in data.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to build models and make predictions.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to evaluate models for accuracy.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to work with large dataset.</p>
            </li>
          </ul>
        </article>

        {/* End of UI/UX Design */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I enjoy building web applications.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>I have learned MERN Stack development.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to work with React components, useState management.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Also have ability to work with React hooks, React reducers, routing etc.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>I also know HTML, CSS, and JavaScript.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>I have done loads of project using these skills.</p>
            </li>
          </ul>
        </article>

        {/* End Web Development */}

        <article className='service'>
          <div className='service__head'>
            <h3>Android Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Also having interested in building mobile apps.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Have learned to work with android studio.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to work with lots of activities, Views, layouts.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to work with recycler view, fragments, model and adapter class</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to work with firebase and real-time databases.</p>
            </li>
          </ul>
        </article>

        {/* End of Android Development */}
        

      </div>
    </section>
  )
}

export default Services