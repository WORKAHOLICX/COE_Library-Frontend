import React from 'react';
import './Navbar.css';
import Profiledp from '../Profiledropdown/profiledp';
import {useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
        <nav className="nav-main">
        <div className="navbar">
          <div style={{display:'flex', cursor:'pointer'}} onClick={()=> {navigate("/home")}} >
          <div className="logo-image"></div>
            <div><h1>
                <span className='virtual'>Virtual</span><span className="librarys">Library</span>
            </h1></div>
            </div>
              <Profiledp/>            
          </div>
       </nav>
    </div>
  )
}

export default Navbar