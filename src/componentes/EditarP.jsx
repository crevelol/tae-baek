import React from 'react'

import axios from 'axios';

class EditarP extends React.Component {

    state = {
        producto: '',
        tipo: '',
        cantidad: '',
        precio: '',
        editado: '',
        respuesta: '',
        id: ''
    }

    consulta = async(id) => {
        const query = JSON.stringify({
            "producto": this.state.email,
            "tipo": this.state.password,
            "cantidad": this.state.cantidad,
            "precio": this.state.precio
        });

        await this.props.token

        await axios.put(`https://rest-nodejs-mongodb.herokuapp.com/producto/${id}`, query,
        {headers:{"Content-Type":"application/json", token : this.props.token}})
            .then(res => {
                const edi = res.data;

                var e = Object.values(edi);
                console.log(e);
                this.setState({ editado: e[0] })

        })
    }

    componentDidMount() {
        this.setState({id: this.props.id})
        this.setState({producto: this.props.producto})
        this.setState({tipo: this.props.tipo})
        this.setState({cantidad: this.props.cantidad})
        this.setState({precio: this.props.precio})
    }

    handleSubmit = async event => {
        event.preventDefault();
        await this.consulta(this.state.id)
        console.log(this.state.editado);
        if(this.state.editado===true){
            this.setState({respuesta: 'Actualizacion exitosa'})
        }

    }

    proHandleChange = event => {
        this.setState({ producto: event.target.value });
    }

    tipHandleChange = event => {
        this.setState({ tipo: event.target.value });
    }

    canHandleChange = event => {
        this.setState({ cantidad: event.target.value });
    }

    preHandleChange = event => {
        this.setState({ precio: event.target.value });
    }

    render() {

        if(this.props.id !== this.props.id2){
            return (
                <React.Fragment></React.Fragment>
            )
        }else{

            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Producto :</label><input type="text" value={this.state.producto} onChange={this.proHandleChange}/>
                        <label>Tipo :</label><input type="text" value={this.state.tipo} onChange={this.tipHandleChange}/>
                        <label>Cantidad :</label><input type="text" value={this.state.cantidad} onChange={this.canHandleChange}/>
                        <label>Precio :</label><input type="text" value={this.state.precio} onChange={this.preHandleChange}/>

                        <button type="submit">Editar</button>
                    </form>
                    <label>{this.state.respuesta}</label>
                </div>
            )
        }
        
    }
}

export default EditarP;