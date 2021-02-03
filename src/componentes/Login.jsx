import React from 'react'

import Ingresar from './Ingresar';

class Login extends React.Component {

    state = {
        show: true,
        email: '',
        password: '',
        message: ''
    }

    emaHandleChange = event => {
        this.setState({ email: event.target.value });
    }

    passHandleChange = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.email===''){
            this.setState({message: 'El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.'})
        }else{
            this.setState({ show: !this.state.show })
        }
        
    }

    render() {
        if(this.state.show){
            return (
                <div >
                    <hr className="linea"/>
                    <form onSubmit={this.handleSubmit} className="App_form">
                        <br/>
                        <label>Correo</label><br/><input type="text" value={this.state.email} onChange={this.emaHandleChange}/>
                        <br/>
                        <b>{this.state.message}</b>
                        <br/>
                        <label>Contraseña</label><br/><input type="text" value={this.state.password} onChange={this.passHandleChange}/>
                        <br/>
                        <br/>
                        <button type="submit">Ingresar</button>
                        <br/>
                        <br/>
                    </form>
                </div>
            )
        }else{
            return(
                <Ingresar email={this.state.email} password={this.state.password}/>
            )
        }
        
    }
}

export default Login;