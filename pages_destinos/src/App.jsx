import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/Global.css';
import './styles/Navbar.css';
import './styles/Destinos.css';
import './styles/Notificaciones.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
