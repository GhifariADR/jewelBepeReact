import React from 'react'
import roundPapaver from '../../assets/roundPapaver.svg'
import './product.css'

const PapaverDesc:React.FC = () => {
  return (
    <div className='' style={{backgroundColor : '#EDE9E2'}}>
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <img className='d-block mx-auto' src={roundPapaver} width={'80%'}/>
                </div>
                <div className='col-md-6 col-sm-12 mt-5'>
                    <div className='row'>
                        <h3>Material:</h3>
                        <p>Upcycled PET plastic bottles, resin, glitter, 925 sterling silver, cubic zirconia, brass, stainless steel.
                        </p>
                    </div>
                     <div className='row'>
                        <h3>Measurements:</h3>
                        <p> 
                            - Flower size: 6.5 x 6.5cm approx.                      
                        </p>
                        <p>
                            - Earcuff size: All size
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PapaverDesc
