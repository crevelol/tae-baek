import React from 'react';
import axios from 'axios';

class Resultado extends React.Component {

    state = {
        clust: 3,
        predi: ''
    }

    consulta = async() => {
        const query = JSON.stringify({
            "Grams": parseFloat(this.props.grams),
            "Calories": parseFloat(this.props.calories),
            "Protein": parseFloat(this.props.protein),
            "Fat": parseFloat(this.props.fat),
            "Sat.Fat": parseFloat(this.props.fat_sat),
            "Fiber": parseFloat(this.props.fiber),
            "Carbs": parseFloat(this.props.carbs)
        });

        await axios.post(`https://rest-clustering.herokuapp.com/`, query,{headers:{"Content-Type":"application/json"}})
            .then(res => {
                const clust = res.data;

                var d = Object.values(clust);
                this.setState({ clust: d[0] })
        })
        
        var texto

        if(this.state.clust===0){
            texto = 'El aporte bajo el consumo de este alimento 9 a 11 veces al dia otorga la minima kcal necesarias para mantener el mentabolismo humano';
            this.setState({predi: texto})
        }else if(this.state.clust===1){
            texto = 'El aporte alto el consumo de este alimento 2 a 3 veces al dia otorga la minima kcal necesarias para mantener el mentabolismo humano';
            this.setState({predi: texto})
        }else if(this.state.clust===2){
            texto = 'El aporte medio el consumo de este alimento 3 a 4 veces al dia otorga la minima kcal necesarias para mantener el mentabolismo humano';
            this.setState({predi: texto})
        }else if(this.state.clust===3){
            texto = 'Cargando datos del alimento';
            this.setState({predi: texto})
        }
    }

    componentDidMount() {
        this.consulta();
    }

    render() {
        return (
            <div>
                <h1>{this.state.predi}</h1>
            </div>
        )
        
    }
}

export default Resultado;