import React from 'react';
import Menu from './componentes/menu'; 
import Cuerpo from './componentes/cuerpo'; 
import Carrusel from './componentes/carrusel'; 



import './App.css';



function App() {
  return (
  
    <div className= 'header'>
     <Menu />
     <Cuerpo />
     <Carrusel/>
    </div>
  );
}

export default App;