import React from 'react'
import './Home.css'
import logo from '../../assets/foody.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='title'>
        <div className='name'>
        <h1>Moody</h1><h1 className='redtext'>Foody</h1>
        </div>
        <p className='desc'>Moody Foody, match your mood with the taste of new food!</p>
        <Link className='button' to='/search'>Get Started</Link>
      </div>     
    </div>
  )
}

export default Home
