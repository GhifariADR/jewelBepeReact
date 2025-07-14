import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ClairHero from '../../components/product/ClairHero'
import Footer from '../../components/footer/Footer'
import ClairDesc from '../../components/product/ClairDesc'

const ClairDeSquelette:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <ClairHero/>
        <ClairDesc/>
        <Footer/>
    </div>
  )
}

export default ClairDeSquelette