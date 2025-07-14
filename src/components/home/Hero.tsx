import React from 'react'
import bgHero from '../../assets/Image slide.svg'

const Hero:React.FC = () => {
  return (
        <div style={{ backgroundColor: '#20201F' }}>
            {/* Mobile only (smaller than md) */}
            <div className='d-block d-md-none'>
                <img className='img-fluid w-100' src={bgHero} alt='Hero Banner' style={{height:'100vh'}}/>
            </div>

            {/* Desktop only (md and up) */}
            <div className='d-none d-md-block'>
                <img
                    className='w-100'
                    src={bgHero}
                    alt='Hero Banner'
                    style={{ height: 'auto', objectFit: 'contain' }}
                />
            </div>
        </div>

    
  )
}

export default Hero