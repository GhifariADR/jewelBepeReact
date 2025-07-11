import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/home/Hero'

const Home:React.FC = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <Hero/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home