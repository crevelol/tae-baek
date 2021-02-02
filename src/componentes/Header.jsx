import React from 'react'
import logo from '../imagenes/logo.svg';
import menu from '../imagenes/list.svg';

class Header extends React.Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <h1>TAE BAEK ECUADOR</h1>
              <div className="App-logo">
                <img src={logo} className="Logo" alt="logo" />
                <nav class="menu">
                  <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">¿Quienes Somos?</a></li>
                    <li><a href="/dietas">Dietas sugeridas</a></li>
                    <li><a href="/inscribete">Tienes una cuenta aqui?</a></li>
                    <li><a href="/login">Login</a></li>
                  </ul>
                </nav>
                <img src={menu} className="Menu" alt="menu" />
              </div>
              <div className="presentacion">
                <h1>¡Inscríbete ahora!</h1>
                <h2>Obtenga su cuenta es gratis</h2>
                <a href="/inscribete">Inscribete aqui</a>
              </div>
            </header>
          </div>
        )
    }
}

export default Header;