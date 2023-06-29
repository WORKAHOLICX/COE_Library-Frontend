import React from 'react';
import './GoBack.css';
import { useNavigate } from 'react-router';

const GoBack = () => {
    const History = useNavigate();
  return (
    <div className='All'>
        <ul className='back' onClick={()=> {History(-1)}}>
            <li className='gob'><span className='prev'></span></li>    
        </ul>    
    </div>
    
  )
}

export default GoBack