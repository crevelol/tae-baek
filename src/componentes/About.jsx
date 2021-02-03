import React from 'react'

import Header from './Header';

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="App">
                    <hr className="linea"/>
                    <h2 className="body_titulo">ACERCA DE NOSOTROS</h2>
                    <label className="texto">Es un gimnasio encontrado en la magdalena el cual nos da acceso a varias artes marciales para aprender</label>
                </div>
            </React.Fragment>
        )
    }
}

export default About;