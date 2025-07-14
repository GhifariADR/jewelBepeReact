import React from 'react'
import './profile.css'
import heroImage from '../../assets/profile-hero.svg'
const HeroProfile:React.FC = () => {
  return (
   
    <div className="position-relative">
        <img src={heroImage} alt="Hero" className="w-100" style={{height: '500px', objectFit: 'cover'}} />

        <h1 className="text position-absolute top-50 start-50 translate-middle text-white text-center">
            Jewel by <span className="fw-light">Bepe</span>
        </h1>
    </div>
  )
}

export default HeroProfile