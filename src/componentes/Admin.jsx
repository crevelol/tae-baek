import React from 'react'

import Usuarios from './Usuarios';
import Productos from './Productos';

import Cookies from 'universal-cookie'

const cookies = new Cookies();

class Admin extends React.Component {

    state = {
        token: '',
        nombre: ''
    }

    componentDidMount() {
        this.setState({token: cookies.get('token')})
        this.setState({nombre: cookies.get('nombre')})
    }

    cerrarsesion = ()=>{
        cookies.remove('token',{path: "/login"})
        cookies.remove('nombre',{path: "/login"})
        window.location.href='/';
    }

    render() {
        if(this.state.token!==''){
            return (
                <div className="App">
                    <hr className="linea"/>
                    <h1 className="usu">Hola Bienvenido de nuevo admin {this.state.nombre}</h1>
                    <Usuarios toke={this.state.token}/>
                    <Productos toke={this.state.token}/>
                    <button onClick={()=>this.cerrarsesion()}>Cerrar Sesion</button>
                </div>
            )
        }else{
            return (
                <div>
                    <h1>Error debe ingresar con una cuenta</h1>
                    <h3>El acceso esta denegado a las personas sin una cuenta porfavor resgistrese o hable con el administrador</h3>
                </div>
            )
        }
        
    }
}

export default Admin;