import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ContactHero from '../components/contact/ContactHero'
import Footer from '../components/footer/Footer'
import ContactDetail from '../components/contact/ContactDetail'

const Contact:React.FC = () => {
  return (
	<div>
		<Navbar/>
		<ContactHero/>
		<ContactDetail/>
		<Footer/>
	</div>
  )
}

export default Contact