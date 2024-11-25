import React from 'react'
import destino from '../../public/imagens/1 DESTINO.png'

const Footer = () => {
  return (
    <>
    <footer class="footer">
        <div class="section__container footer__container">
            <div class="footer__col">
                <div class="logo footer__logo">
                    <a href="#"><img src={destino} alt="logo" /></a>
                </div>
                <p class="section__description">
                    Con años de experiencia en la planificación de viajes, garantizamos experiencias inolvidables y
                    servicios
                    excepcionales.
                </p>
                <ul class="footer__socials">
                    <li>
                        <a href="#"><i class="ri-facebook-fill"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="ri-google-fill"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="ri-instagram-line"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="ri-youtube-line"></i></a>
                    </li>
                </ul>
            </div>
            <div class="footer__col">
                <h4>Enlaces rápidos</h4>
                <ul class="footer__links">
                    <li><a href="#">Alojamiento de calidad</a></li>
                    <li><a href="#">Transporte eficiente</a></li>
                    <li><a href="#">Actividades recreativas</a></li>
                    <li><a href="#">Asesoría de itinerarios</a></li>
                    <li><a href="#">Paquetes Personalizados</a></li>
                </ul>
            </div>
            <div class="footer__col">
                <h4>Información de contacto</h4>
                <ul class="footer__links">
                    <li>
                        <p>
                            Descubra el mundo con nosotros y permita que su aventura comience con el mejor cuidado y
                            planificación.
                        </p>
                    </li>
                    <li>
                        <p>Celular: <span>+51 986 023 334</span></p>
                    </li>
                    <li>
                        <p>Email: <span>info@destino.com</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Footer