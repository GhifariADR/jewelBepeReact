import React, { useState } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar:React.FC = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState<boolean>(false)


  return (
    <div className='navbar' style={{backgroundColor: '#20201F', height : '100px'}}>
        <div className='container d-flex justify-content-between'>
            <div className='text-white navbar-brand'>
                <h1>Jewel by <span>Bepe</span></h1>
            </div>
            <div className='d-md-flex text-white gap-5 d-none'>            
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

            <div className="d-md-none text-white p-4" style={{cursor : 'pointer'}} onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>

            {showMenu && (
                <div className="mobile-menu-overlay d-md-none">
                    <div className="mobile-menu p-4">
                        <div className="navbar-item py-2 px-3 rounded hover-effect" onClick={() => { setShowMenu(false); navigate('/'); }}>
                            Home
                        </div>
                        <div className="navbar-item py-2 px-3 rounded hover-effect" onClick={() => { setShowMenu(false); navigate('/profile'); }}>
                            Profile
                        </div>
                        <div className="navbar-item py-2 px-3 rounded hover-effect" onClick={() => { setShowMenu(false); navigate('/catalog'); }}>
                            Catalog
                        </div>
                        <div className="navbar-item py-2 px-3 rounded hover-effect" onClick={() => { setShowMenu(false); navigate('/contact'); }}>
                            Contact
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    </div>
  )
}

export default Navbar