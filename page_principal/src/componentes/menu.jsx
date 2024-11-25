import React, { useState, useEffect } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';  
import 'swiper/css'; 
import '../App.css' 
import logoImage from '../images/logo.png';


const Menu = () => {  

  return (  
   <header>  
    <div className="header-overlay" />  
    <div className="menu container">  
      <a href="index.html">  
      <img src={logoImage} alt="" className="logo"/>
      </a>  
      <nav className="navbar">  
       <ul>  
        <li><a href="https://johancotrina.github.io/page_nosotros/">Nosotros</a></li>  
        <li><a href="https://johancotrina.github.io/pages_destinos/">Destinos</a></li>  
        <li><a href="https://johancotrina.github.io/pages_reservaciones/">Reservaciones</a></li>  
        <li><a href="">Contacto</a></li>  
       </ul>  
      </nav>  
      <div className="icons">
          <a href="https://www.facebook.com/profile.php?id=61560425783389" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className='icons'/>
          </a>
          <a href="https://x.com/destinosperutra" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className='icons'/>
          </a>
          <a href="https://www.instagram.com/destinosperuoficial_/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className='icons' />
          </a>
        </div>
    </div>  
  
   </header>  
  );  
};  
  


export default Menu;
