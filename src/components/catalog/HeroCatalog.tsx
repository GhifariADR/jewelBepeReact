import React from 'react'
import catalogHero from '../../assets/catalog-hero.svg'

const HeroCatalog:React.FC = () => {
  return (
    <div>
        <img className='w-100' src={catalogHero} style={{height: 'auto', objectFit :'cover'}}/>
    </div>
  )
}

export default HeroCatalog