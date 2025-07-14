import React from 'react'
import heroImage from '../../assets/contact-hero.svg'

const ContactHero:React.FC = () => {
  return (
    <div className="position-relative w-100">
        <img src={heroImage} alt="Hero" className="w-100" style={{height: '500px', objectFit: 'cover'}} />
    </div>
  )
}

export default ContactHero