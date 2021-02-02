import React from 'react';
import axios from 'axios';

class Registrar extends React.Component {

    consulta = async() => {
        const query = JSON.stringify({
            "nombre": this.props.nombres,
            "apellido": this.props.apellidos,
            "email": this.props.email,
            "password": this.props.password,
            "telefono": this.props.telefono,
            "direccion": this.props.direccion,
            "nacimiento": this.props.nacimiento,
            "sexo": this.props.sexo
        });

        await axios.post(`https://rest-clustering.herokuapp.com/`, query,{headers:{"Content-Type":"application/json"}})
            .then(res => {
                const clust = res.data;

                var d = Object.values(clust);
                console.log(d);
                this.setState({ clust: d[0] })
        })
    }

    render() {
        return (
            <div className="App">
                <hr className="linea"/>
                <h1>Se ha registrado exitosamente</h1>
                
            </div>
        )
    }
}

export default Registrar;