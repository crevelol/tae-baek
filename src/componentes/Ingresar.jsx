import React from 'react'

import axios from 'axios';
import Cookies from 'universal-cookie'

import Nologin from './Nologin';
import Admin from './Admin';
import User from './User';

const cookies = new Cookies();

class Ingresar extends React.Component {

    state = {
        cuenta: false,
        token: '',
        usuario: ''
    }

    consulta = async() => {
        const query = JSON.stringify({
            "email": this.props.email,
            "password": this.props.password
        });

        await axios.post(`https://rest-nodejs-mongodb.herokuapp.com/login`, query,{headers:{"Content-Type":"application/json"}})
            .then(res => {
                const log = res.data;

                var l = Object.values(log);
                this.setState({ cuenta: l[0] })
                this.setState({ token: l[1] })
                this.setState({ usuario: l[2] })
                cookies.set('token', this.state.token, {path: "/login"})
                cookies.set('nombre', this.state.usuario.nombre, {path: "/login"})
                cookies.set('apellido', this.state.usuario.apellido, {path: "/login"})
                cookies.set('sexo', this.state.usuario.sexo, {path: "/login"})
                cookies.set('telefono', this.state.usuario.telefono, {path: "/login"})
                if(this.state.usuario.role === 'ADMIN ROLE'){
                    window.location.href="./login/admin";
                }else{
                    window.location.href="./login/usuario";
                }

        })
    }

    componentDidMount() {
        this.consulta();
    }
    
    render() {
        if(this.state.cuenta){
            if(this.state.usuario.role === 'USER ROLE'){
                return (
                    <User usuario={this.state.usuario} token={this.state.token}/>
                )
            }else{
                return (
                    <Admin usuario={this.state.usuario} token={this.state.token}/>
                )
            } 
        }else{
            return (
                <Nologin/>
            )
        }
        
    }
}

export default Ingresar;