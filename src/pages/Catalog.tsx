import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroCatalog from '../components/catalog/HeroCatalog'
import Footer from '../components/footer/Footer'
import CatalogList from '../components/catalog/CatalogList'

const Catalog:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <HeroCatalog/>
        <CatalogList/>
        <Footer/>
    </div>
  )
}

export default Catalog