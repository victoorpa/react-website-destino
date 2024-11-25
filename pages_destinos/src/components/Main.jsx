import React from 'react';
import '../styles/Main.css';
import Paracas from '../img/PARACAS.webp';
import Nazca from '../img/Nazca_05.webp';
import Pichuu from '../img/pichuu2.jpg';
import chann from '../img/chan.jpg';
import colores from '../img/7colores.webp';
import cañon from '../img/cañon.jpg';
import lima from '../img/tour-lima.webp';
import titi from '../img/titicaca.jpg';



const Main = () => {
  return (
    <main>

      <section className="grupo-destino" id="reserdestinates">
        <div className="destino">
          <img src={Paracas} alt="Paracas"/>
          <h3>Paracas</h3>
          <p>Excursión a Paracas y al Oasis de la Huacachina en autobús de lujo.</p>
          <p><i className="fa-solid fa-location-dot"></i> Ica</p>
          <p><i className="fa-regular fa-clock"></i> 3 días</p>
          <button>Reservar</button>
        </div>
        
        <div class="destino">
                <img src={Nazca}/>
                <h3>Lineas de Nazca</h3>
                <p>Las Líneas de Nazca. Una mística odisea vista desde el cielo.</p>
                <p><i class="fa-solid fa-location-dot"></i> Nazca-Ica</p>
                <p><i class="fa-regular fa-clock"></i> 3.45 min</p>
                <button>Reservar</button>
            </div>

            <div class="destino">
                <img src={Pichuu}/>
                <h3>Machu Pichu</h3>
                <p>Visita una de las mejores maravillas del Perú y el mundo.</p>
                <p><i class="fa-solid fa-location-dot"></i> Cuzco</p> 
                <p><i class="fa-regular fa-clock"></i> 3 días</p>
                <button>Reservar</button>
            </div>

            <div class="destino">
                <img src={chann}/>
                <h3>Chan Chan</h3>
                <p>Presencia la ciudad en adobe más grande de América y del mundo.</p>
                <p><i class="fa-solid fa-location-dot"></i> Trujillo</p> 
                <p><i class="fa-regular fa-clock"></i> 2.30 min</p>
                <button>Reservar</button>
            </div>

            <div class="destino">
                <img src={colores}/>
                <h3>La montaña de 7 colores</h3>
                <p>Vive una gran aventura en la Montaña Arco Iris (Vinicunca).</p>
                <p><i class="fa-solid fa-location-dot"></i> Cuzco</p> 
                <p><i class="fa-regular fa-clock"></i> 1 día</p>
                <button>Reservar</button>
            </div>

            <div class="destino">
                <img src={cañon}/>
                <h3>Cañón del Colca</h3>
                <p> Tour panorámico en el que podrás apreciar la belleza de Arequipa.</p>
                <p><i class="fa-solid fa-location-dot"></i> Arequipa</p> 
                <p><i class="fa-regular fa-clock"></i> 2 días</p>
                <button>Reservar</button>
            </div>

            <div class="destino">
                <img src={lima}/>
                <h3>Lima Tour</h3>
                <p> Excursión en autobús turístico por la ciudad de Lima</p>
                <p><i class="fa-solid fa-location-dot"></i> Lima</p> 
                <p><i class="fa-regular fa-clock"></i> 4 horas</p>
                <button>Reservar</button>
            </div>

            
            <div class="destino">
                <img src={titi}/>
                <h3>Lago Titicaca</h3>
                <p> Disfruta uno de los lagos más grandes de Sudamérica.</p>
                <p><i class="fa-solid fa-location-dot"></i> Puno</p> 
                <p><i class="fa-regular fa-clock"></i> 2 días</p>
                <button>Reservar</button>
            </div>

      </section>

      <section className="notificaciones">
        <h2>Notificaciones de Reservación</h2>
        <div id="area-notificaciones">
          <p>No hay notificaciones nuevas</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
