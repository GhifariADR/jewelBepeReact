import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import RosaHero from '../../components/product/RosaHero'
import RosaDesc from '../../components/product/RosaDesc'
import Footer from '../../components/footer/Footer'

const RosaRugosaRobusta:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <RosaHero/>
        <RosaDesc/>
        <Footer/>
    </div>
  )
}

export default RosaRugosaRobusta