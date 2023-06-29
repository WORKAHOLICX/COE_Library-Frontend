import React from 'react'
import Logo from './../../Assets/Klogo.png';
import "./admin.css";
import { Avatar, StyledTitle, StyledSubTitle, StyledFormButton } from '../../Components/Style';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='hody'>
    <div className='real-container'>
        <div className='form'>
        <div style={{display:'flex'}}>
        <Avatar image={Logo} />
          <StyledTitle color='Light black' size={40}>
            <span style={{font: "normal 36px 'Poppins', cursive", margin: 0}}>Virtual</span><span style={{color:'#e0ac1c', font: "normal 36px 'Poppins', cursive"}}>Library</span>
          </StyledTitle></div>
          <StyledSubTitle color='Black' size={35} style={{font: "normal 36px 'Poppins', cursive"}}>Admin</StyledSubTitle>

        <div style={{display:'flex', gap:'1em'}}>
          <Link to='/upload'>
          <StyledFormButton>
                  Upload
          </StyledFormButton>
          </Link>
          <Link to='/delete'>
          <StyledFormButton>
                  Delete
          </StyledFormButton>
          </Link>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Admin