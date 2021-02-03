import React from 'react'

import axios from 'axios';

import EditarP from './EditarP';

function Cancelar(props) {
    return (
      <button onClick={props.onClck}>
        Regresar
      </button>
    );
}

class Productos extends React.Component {

    state = {
        editar: true,
        id: '',
        productos: [],
        eliminado: '',
        editado: ''
    }

    cancelar = async() => {
        this.setState({ editar: true });
        this.setState({ id: '' });
        this.setState({ editado: 'ok' });
    }

    editar = async(id) => {
        this.setState({ editar: !this.state.editar });
        await this.setState({ id: id });
        console.log(this.state.id);
    }

    consulta = async() => {
        await this.props.toke
        await axios.get(`https://rest-nodejs-mongodb.herokuapp.com/producto`,
        { headers: { token : this.props.toke} })
            .then(res => {
                const prod = res.data;

                var p = Object.values(prod);
                this.setState({ productos: p[2] })
                //this.setState({ usuarios: this.state.usuarios[0] })
        })
    }

    componentDidMount() {
        this.consulta();
    }

    componentDidUpdate(){
        if(this.state.eliminado !== ''){
            this.consulta();
        }
        if(this.state.editado !== ''){
            this.consulta();
        }

    }

    eliminar = async(id) => {
        await this.props.toke
        await axios.delete(`https://rest-nodejs-mongodb.herokuapp.com/producto/${id}`,
        { headers: { token : this.props.toke} })
            .then(res => {
                const eli = res.data;

                var e = Object.values(eli);
                this.setState({ eliminado: e[0] })
        })
    }

    render() {
        let boton;
            return (
                <div className="App">
                    <hr className="linea"/>
                    <h2 className="usu">Lista de Productos</h2>
                    <table className="tablas">
                    {this.state.productos.map(producto =>{
                        if(this.state.editar){
                            return (
                                <tbody key = {producto._id}>
                                <tr >
                                    <td>{producto.producto}</td>
                                    <td>{producto.tipo}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.precio}</td>
                                    <td><button  onClick = 
                                    {() => this.editar(producto._id)}>
                                        Editar
                                        </button>
                                    </td>
                                    <td><button onClick = 
                                    {() => this.eliminar(producto._id)}>
                                        Eliminar
                                        </button></td>
                                </tr>
                                </tbody>
                            )
                        }else{
                            boton = <Cancelar onClick={()=> this.cancelar()} />;
                            return(
                                <tbody key = {producto._id}>
                                <tr>
                                    <td>
                                    <EditarP editar={this.state.editar} id={producto._id} id2={this.state.id} producto={producto.producto}
                                        tipo={producto.tipo} cantidad={producto.cantidad} precio={producto.precio} token={this.props.toke}/>
                                    </td>
                                </tr>
                                </tbody>
                            ) 
                        }
                        
                    })}
                    <tbody>
                        <tr>
                            <td>{boton}</td>
                        </tr>  
                    </tbody>
                    
                    </table>
                </div>
            )
        }
}

export default Productos;