import React from 'react'
import bgHero from '../../assets/Image slide.svg'
import bgHero2 from '../../assets/homeHero2.svg'

const Hero:React.FC = () => {
    return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" style={{ backgroundColor: '#20201F' }}>
      <div className="carousel-inner">

        <div className="carousel-item active">
            <img
                    className='w-100'
                    src={bgHero}
                    alt='Hero Banner'
                    style={{ height: '100vh', objectFit: 'contain' }}
                />
        </div>
        <div className="carousel-item">
            <img
                    className='w-100'
                    src={bgHero2}
                    alt='Hero Banner'
                    style={{ height: '100vh', objectFit: 'contain' }}
                />
        </div>

      </div>

      {/* Panah Navigasi */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </button>
    </div>
  );

}

export default Hero