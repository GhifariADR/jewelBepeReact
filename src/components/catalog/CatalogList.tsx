import React from 'react'
import './catalog.css'
import clairDeSquelette from '../../assets/clairDeSquelette.svg'

const CatalogList:React.FC = () => {
  return (
    <div className='p-5' style={{backgroundColor : '#EDE9E2' }}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 d-flex justify-content-center mt-5'>
                    <h1 className='fw-light' style={{fontSize : '38px'}}>A Collection of our Product</h1>
                </div>               
            </div>
            <div className='row mt-5'>
                <div className='col-md-4 col-sm-12 p-2' style={{}}>
                    <div className="card justify-content-center align-items-center">
                        <img src={clairDeSquelette} alt="Necklace" />
                        <div className="card-content">
                            <h3>Clair De Squelette</h3>
                            <p>Necklace</p>
                        </div>
                    </div>
                </div>

                 <div className='col-md-4 col-sm-12 p-2' style={{}}>
                    <div className="card justify-content-center align-items-center">
                        <img src={clairDeSquelette} alt="Necklace" />
                        <div className="card-content">
                            <h3>Clair De Squelette</h3>
                            <p>Necklace</p>
                        </div>
                    </div>
                </div>

                 <div className='col-md-4 col-sm-12 p-2' style={{}}>
                    <div className="card justify-content-center align-items-center">
                        <img src={clairDeSquelette} alt="Necklace" />
                        <div className="card-content">
                            <h3>Clair De Squelette</h3>
                            <p>Necklace</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CatalogList