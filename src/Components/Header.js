import React from 'react';
import pic from '../Images/image.jpg'
import details from './details.json';
import '../App.css';

function Header(){
    return(
        <div>
            <img className='header-img' src={details.image} alt="not found"/>
            <h3>{details.name}</h3>
            <h4>{details.designation}</h4>
            <button className='header-btn' onClick={() => window.location = 'mailto:sushmitakumari363@gmail.com'}><strong>Email</strong></button>
        </div>
    )
}
export default Header;