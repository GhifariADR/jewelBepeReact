import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroProfile from '../components/profile/HeroProfile'
import Footer from '../components/footer/Footer'
import AboutUs from '../components/profile/AboutUs'

const Profile:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <HeroProfile/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default Profile