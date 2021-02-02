import React from 'react'

import Resultado from './Resultado';

class Dietas extends React.Component {

    state = {
        show: true,
        grams: '',
        calories: '',
        protein: '',
        fat: '',
        fat_sat: '',
        fiber: '',
        carbs: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ show: !this.state.show })

    }

    gramsHandleChange = event => {
        this.setState({ grams: event.target.value });
    }

    calHandleChange = event => {
        this.setState({ calories: event.target.value });
    }

    protHandleChange = event => {
        this.setState({ protein: event.target.value });
    }

    grasHandleChange = event => {
        this.setState({ fat: event.target.value });
    }

    grasSatHandleChange = event => {
        this.setState({ fat_sat: event.target.value });
    }

    fibHandleChange = event => {
       this.setState({ fiber: event.target.value });
    }

    carbHandleChange = event => {
        this.setState({ carbs: event.target.value });
    }

    render() {
        if(this.state.show){
            return (
                <React.Fragment>
                    <form onSubmit={this.handleSubmit} >
                        <input type="text" value={this.state.grams} onChange={this.gramsHandleChange}/>
                        <input type="text" value={this.state.calories} onChange={this.calHandleChange}/>
                        <input type="text" value={this.state.protein} onChange={this.protHandleChange}/>
                        <input type="text" value={this.state.fat} onChange={this.grasHandleChange}/>
                        <input type="text" value={this.state.fat_sat} onChange={this.grasSatHandleChange}/>
                        <input type="text" value={this.state.fiber} onChange={this.fibHandleChange}/>
                        <input type="text" value={this.state.carbs} onChange={this.carbHandleChange}/> 

                        <button type="submit">Buscar</button>
                    </form>
                </React.Fragment>
            )
        }else{
            return (
                <Resultado grams={this.state.grams} calories={this.state.calories} protein={this.state.protein}
                fat={this.state.fat} fat_sat={this.state.fat_sat} fiber={this.state.fiber} carbs={this.state.carbs}/>
            )
        }
        
    }
}

export default Dietas;