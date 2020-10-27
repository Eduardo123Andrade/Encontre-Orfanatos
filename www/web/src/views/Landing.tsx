import React from 'react'
import '../styles/pages/landing.css'
import { FiArrowRight } from 'react-icons/fi'
import LogoImg from '../assets/images/Logo.svg'
import {Link} from 'react-router-dom'

export const Landing = () => {
    return (
        <div id='page-landing'>
        <div className='content-wrapper'>
          <img src={LogoImg} alt='Logo' />
          <main>
            <h1>Leve felicidade ao mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
  
          <div className='location'>
            <strong>Paulista</strong>
            <span>Pernambuco</span>
          </div>
  
          <Link to='app' className='enter-app'>
            <FiArrowRight size={26} color='#000' />
          </Link>
        </div>
      </div>
  
    )
}