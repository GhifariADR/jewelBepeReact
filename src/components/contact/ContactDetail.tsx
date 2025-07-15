import React from 'react'
import './contact.css'

const ContactDetail:React.FC = () => {
  return (
    <div className='p-5' style={{backgroundColor : '#EDE9E2'}}>
        <div className='about-us container'>
            <div className='row'>
                <h1 className='fw-medium'>Contact</h1>
            </div>
            <div className='row'>
                <p className='fw-light' style={{fontSize : '22px'}}>Email: jewelbybepeatelier@gmail.com
                </p>

                <p className='fw-light' style={{fontSize : '22px'}}>Phone: +62 822‑3003‑1898
                </p>

                <p className='fw-light' style={{fontSize : '22px'}}>Adress: Offline store Pillar, Plaza Indonesia
                </p>

            </div>
            
        </div>
    </div>
  )
}

export default ContactDetail