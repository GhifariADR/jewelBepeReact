import React from 'react'
import './profile.css'

const AboutUs:React.FC = () =>{
  return (
    <div className='p-5' style={{backgroundColor : '#EDE9E2'}}>
        <div className='about-us container'>
            <div className='row'>
                <h1 className='fw-medium'>About Us</h1>
            </div>
            <div className='row'>
                <p className='fw-light'>Jewel by Bepe adalah brand perhiasan yang didirikan oleh
                Adityo BP. Perhiasan ini terbuat dari bahan-bahan upcycled,
                terutama botol plastik bekas.
                </p>

                <p className='fw-light'>Ciri khas desain Jewel adalah
                    pendekatan artistik berupa perhiasan floral yang realistis,
                    namun dengan sentuhan eksentrik yang sering kali
                    menggabungkan unsur keindahan alam dengan elemen
                    futuristik, serta transformasi material dari yang terbuang
                    menjadi sesuatu yang bernilai.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default AboutUs