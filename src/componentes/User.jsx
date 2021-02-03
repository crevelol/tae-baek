import React from 'react'

class User extends React.Component {
    render() {
        return (
            <div className="App">
                <hr className="linea"/>
                <h1>Hola Bienvenido de nuevo {this.props.usuario.nombre}</h1>
            </div>
        )
    }
}

export default User;