import React from 'react'
import roundClair from '../../assets/roundClair.svg'
import './product.css'

const ClairDesc:React.FC = () => {
  return (
    <div className='' style={{backgroundColor : '#EDE9E2'}}>
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <img className='d-block mx-auto' src={roundClair} width={'80%'}/>
                </div>
                <div className='col-md-6 col-sm-12 mt-5'>
                    <div className='row'>
                        <h3>Material:</h3>
                        <p>Upcycled PET plastic bottles, resin, glitter, Swarovski crystals, hematite, brass,
                        stainless steel.
                        </p>
                    </div>
                     <div className='row'>
                        <h3>Measurements:</h3>
                        <p> 
                            - Flower size: 2.25 x 2.25 cm approx.                       
                        </p>
                        <p>
                            - Necklace circumference: 33 - 43 cm approx
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClairDesc