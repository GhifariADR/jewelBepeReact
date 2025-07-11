import React from 'react'
import bgHero from '../../assets/Image slide.svg'

const Hero:React.FC = () => {
  return (
    <div className='' style={{backgroundColor : '#20201F'}}>
        <img className='img-fluid w-100' src={bgHero} alt='Hero Banner' style={{height : '100vh', backgroundSize: 'cover'}}/>
    </div>
  )
}

export default Hero