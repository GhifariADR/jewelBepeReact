import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import PapaverHero from '../../components/product/PapaverHero'
import PapaverDesc from '../../components/product/PapaverDesc'
import Footer from '../../components/footer/Footer'

const PapaverTranslucite:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <PapaverHero/>
        <PapaverDesc/>
        <Footer/>
    </div>
  )
}

export default PapaverTranslucite