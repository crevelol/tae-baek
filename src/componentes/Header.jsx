import React from 'react'
import logo from '../imagenes/logo.svg';
import menu from '../imagenes/list.svg';

class Header extends React.Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <div className="App-logo">
                <img src={logo} className="Logo" alt="logo" /><h1>Tae Baek Ecuador</h1>
                <img src={menu} className="Menu" alt="menu" />
              </div>
              <div className="presentacion">
                <h1>¡Inscríbete ahora!</h1>
                <h2>Obtenga su cuenta es gratis</h2>
                <a href="algun_lado.html">Inscribete aqui</a>
              </div>
            </header>
          </div>
        )
    }
}

export default Header;