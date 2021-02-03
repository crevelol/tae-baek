import React from 'react'

class Body extends React.Component {
    render() {
        return (
            <div className="App">
                <hr className="linea"/>
                <h2 className="body_titulo">Bienvenido a TAE BAEK ECUADOR</h2>
                    <div className="div_texto">
                    <h5 className="texto">Mejora tu estilo de vida</h5>
                    <label className="texto">El ejercicio físico regular es una de las formas de sentirte mejor 
                    contigo mismo. ¿Por qué ocurre? Las actividades más intensas nos hacen sentir mejor gracias a
                    que generan más estrés en el organismo. Éste libera endorfinas y nos inducen a una mayor sensación 
                    de felicidad tras la actividad. Por eso cuando volvemos del gimnasio nos sentimos tan bien.</label>
                 </div>
            </div>
        )
    }
}

export default Body;