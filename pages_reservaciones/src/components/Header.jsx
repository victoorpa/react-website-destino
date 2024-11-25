import React from 'react'

import destino from '../../public/imagens/1 DESTINO.png'
import menu from '../../public/imagens/Imagen1.png'

const Header = () => {
  return (
    <>  

        <header class="header">
            <div class="menu container">
                <a href="#" class="enlace">
                    <img src={destino} alt="Logo destino" class="logo"/>
                </a>
                <input type="checkbox" id="menu" />
                <label for="menu">
                    <img src={menu} class="menu-icono" alt="Icono del menú"/>
                </label>
                <nav class="navbar">
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Destinos</a></li>
                        <li><a href="#;">Reservaciones</a></li>
                        <li><a href="#;">Contacto</a></li>
                    </ul>
                </nav>
                <div class="icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </header>
        
    </>
  )
}

export default Header