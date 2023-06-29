import React from 'react';
import './PageNotFound.css';
import {Link} from 'react-router-dom';

const PageNotFound = () => {
  return (
   <div className = "whole">
    <div className='sub'>
      <div className='number'>4</div>
      <div className='number'>0</div>
      <div className='number'>4</div>
      {/* <div className = "Button"> */}
        {/* <Link className= "link" to="/home"><button>HomePage</button></Link> */}
      {/* </div> */}
    </div> 
    

     <div className='pic'>
      
      </div>
    
    
    <div className='field'>
      <h2>Oops...looks like you got lost</h2>
      
      

      <Link className= "link" to="/home">Go home</Link>

    </div>
 
  </div>
  )
}

export default PageNotFound