import React from 'react'

import axios from 'axios';

class Usuarios extends React.Component {

    state = {
        usuarios: [],
        desd: 0,
        limit: 5
    }

    consulta = async() => {
        await this.props.toke;
        await axios.get(`https://rest-nodejs-mongodb.herokuapp.com/usuario`,
        { headers: { token : this.props.toke} },
        { params: { desde: this.state.desd, limite: this.state.limit } })
            .then(res => {
                const usua = res.data;

                var u = Object.values(usua);
                this.setState({ usuarios: u[2] })
                //this.setState({ usuarios: this.state.usuarios[0] })
        })
    }

    componentDidMount() {
        this.consulta();
    }

    render() {
        return (
            <div className="App">
                <hr className="linea"/>
                <h2 className="usu">Lista de usuarios</h2>
                <table border="1" className="tablas">
                {this.state.usuarios.map(usuario =>{
                    return (
                        <tbody key = {usuario._id}>
                        <tr >
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.nacimiento}</td>
                            <td>{usuario.sexo}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.direccion}</td>
                        </tr>  
                        </tbody>  
                    )
                }) }
                </table>
            </div>
        )
    }
}

export default Usuarios;