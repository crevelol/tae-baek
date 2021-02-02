import React from 'react'

import Registrar from './Registrar';

class Inscribete extends React.Component {
    state = {
        show: true,
        nombres: '',
        apellidos: '',
        telefono: '',
        direccion: '',
        nacimiento: '',
        email: '',
        password: '',
        sexo: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ show: !this.state.show })

    }

    nomHandleChange = event => {
        this.setState({ nombres: event.target.value });
    }

    apeHandleChange = event => {
        this.setState({ apellidos: event.target.value });
    }

    telHandleChange = event => {
        this.setState({ telefono: event.target.value });
    }

    dirHandleChange = event => {
        this.setState({ direccion: event.target.value });
    }

    nacHandleChange = event => {
        this.setState({ nacimiento: event.target.value });
    }

    emaHandleChange = event => {
        this.setState({ email: event.target.value });
    }

    passHandleChange = event => {
        this.setState({ password: event.target.value });
    }

    sexHandleChange = event => {
        this.setState({ sexo: event.target.value });
    }

    render() {
        if(this.state.show){
            return (
                <React.Fragment>
                    <form onSubmit={this.handleSubmit} >
                        <input type="text" value={this.state.nombres} onChange={this.nomHandleChange}/>
                        <input type="text" value={this.state.apellidos} onChange={this.apeHandleChange}/>
                        <input type="text" value={this.state.telefono} onChange={this.telHandleChange}/>
                        <input type="text" value={this.state.email} onChange={this.emaHandleChange}/>
                        <input type="text" value={this.state.password} onChange={this.passHandleChange}/>
                        <input type="text" value={this.state.sexo} onChange={this.sexHandleChange}/>
                        <input type="text" value={this.state.direccion} onChange={this.dirHandleChange}/>
                        <input type="text" value={this.state.nacimiento} onChange={this.nacHandleChange}/>

                        <button type="submit">Registrar</button>
                    </form>
                </React.Fragment>
            )
        }else{
            return (
                <Registrar nombres={this.state.nombres} apellidos={this.state.apellidos} telefono={this.state.telefono}
                direccion={this.state.direccion} nacimiento={this.state.nacimiento} email={this.state.email}
                password={this.state.password} sexo={this.state.sexo}/>
            )
        }
        
    }
}


export default Inscribete;