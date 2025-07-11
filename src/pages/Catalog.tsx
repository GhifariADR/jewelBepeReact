import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroCatalog from '../components/catalog/HeroCatalog'
import Footer from '../components/footer/Footer'

const Catalog:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <HeroCatalog/>
        <Footer/>
    </div>
  )
}

export default Catalog