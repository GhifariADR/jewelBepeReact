import React from 'react'
import roundRosa from '../../assets/roundRosa.svg'
import './product.css'

const RosaDesc
:React.FC = () => {
  return (
    <div className='' style={{backgroundColor : '#EDE9E2'}}>
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <img className='d-block mx-auto' src={roundRosa} width={'80%'}/>
                </div>
                <div className='col-md-6 col-sm-12 mt-5'>
                    <div className='row'>
                        <h3>Material:</h3>
                        <p>Polyethylene terephthalate (recycled plastic bottles), lacquer  paint, rhinestone, Japanese beads, Stainless steel wire, stainless steel balls, stainless steel clasp,  metal chain, acrylic
                        </p>
                    </div>
                     <div className='row'>
                        <h3>Measurements:</h3>
                        <p> 
                           - Flower size:  4.5 x 4.5 cm approx                     
                        </p>
                        <p>
                            - Necklace circumference: 30 to 40 cm approx
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RosaDesc
