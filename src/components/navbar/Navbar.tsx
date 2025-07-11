import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar:React.FC = () => {
    const navigate = useNavigate();


  return (
    <div className='navbar' style={{backgroundColor: '#20201F', height : '100px'}}>
        <div className='container d-flex justify-content-between'>
            <div className='text-white navbar-brand'>
                <h1>Jewel by <span>Bepe</span></h1>
            </div>
            <div className='d-flex text-white gap-5'>            
                <div className='navbar-item' onClick={() => navigate('/')}>
                    <p>Home</p>
                </div>
                <div className='navbar-item' onClick={() => navigate('/profile')}>
                    <p>Profile</p>
                </div>
                <div className='navbar-item' onClick={() => navigate('/catalog')}>
                    <p>Catalog</p>
                </div>
                <div className='navbar-item' onClick={() => navigate('/contact')}>
                    <p>Contact</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar