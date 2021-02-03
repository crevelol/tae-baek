import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

class Regis extends React.Component {
    render() {
        return (
            <main>
              <form action className="formulario" id="formulario">
                <div className="formulario__grupo" id="grupo__usuario">
                  <label htmlFor="usuario" className="formulario__label">Usuario</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="usuario" id="usuario" placeholder="Usuario" />
                      <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
      <p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
    </div>
    <div className="formulario__grupo" id="grupo__nombre">
      <label htmlFor="nombre" className="formulario__label">Nombre</label>
      <div className="formulario__grupo-input">
        <input type="text" className="formulario__input" name="nombre" id="nombre" placeholder="Nombre" />
        <i className="formulario__validacion-estado fas fa-times-circle" />
      </div>
      <p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
    </div>
    <div className="formulario__grupo" id="grupo__usuario">
      <label htmlFor="usuario" className="formulario__label">Peso</label>
      <div className="formulario__grupo-input">
        <input type="text" className="formulario__input" name="usuario" id="usuario" placeholder="Peso" />
        <i className="formulario__validacion-estado fas fa-times-circle" />
      </div>
      <p className="formulario__input-error">Solo puede contener numeros.</p>
    </div>
    <div className="formulario__grupo" id="grupo__password">
      <label htmlFor="password" className="formulario__label">Contraseña</label>
      <div className="formulario__grupo-input">
        <input type="password" className="formulario__input" name="password" id="password" />
        <i className="formulario__validacion-estado fas fa-times-circle" />
      </div>
      <p className="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
    </div>
    <div className="formulario__grupo" id="grupo__password2">
      <label htmlFor="password2" className="formulario__label">Repetir Contraseña</label>
      <div className="formulario__grupo-input">
        <input type="password" className="formulario__input" name="password2" id="password2" />
        <i className="formulario__validacion-estado fas fa-times-circle" />
      </div>
      <p className="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
    </div>
    <div className="formulario__grupo" id="grupo__correo">
      <label htmlFor="correo" className="formulario__label">Correo Electrónico</label>
      <div className="formulario__grupo-input">
        <input type="email" className="formulario__input" name="correo" id="correo" placeholder="correo@correo.com" />
        <i className="formulario__validacion-estado fas fa-times-circle" />
      </div>
      <p className="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
    </div>
    <div className="formulario__grupo" id="grupo__telefono">
      <label htmlFor="telefono" className="formulario__label">Teléfono</label>
      <div className="formulario__grupo-input">
        <input type="text" className="formulario__input" name="telefono" id="telefono" placeholder={4491234567} />
        <i className="formulario__validacion-estado fas fa-times-circle" />
      </div>
      <p className="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
    </div>
    <div className="formulario__grupo" id="grupo__terminos">
      <label className="formulario__label">
        <input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
        Acepto los Terminos y Condiciones
      </label>
    </div>
    <div className="formulario__mensaje" id="formulario__mensaje">
      <p><i className="fas fa-exclamation-triangle" /> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
    </div>
    <div className="formulario__grupo formulario__grupo-btn-enviar">
      <button type="submit" className="formulario__btn">Enviar</button>
      <p className="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
    </div>
  </form>
</main>

        )
    }
}

export default Regis;