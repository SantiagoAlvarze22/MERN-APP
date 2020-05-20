import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {

    //State para iniciarsesion
    const [usuario, setUsuario] =useState({
        email:'',
        password:'',
        nombre:'',
        confirmar:''
    })

    //Extraer usuario
    const {email, password,nombre,confirmar} = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    } 

    const onSubmit = e =>{
        e.preventDefault()

        //Validar que no haya campos vacios 

        //pasword minimo de 6 caracteres

        //pasword sean igual

        //pasarla al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener Cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre"> Nombre del usuario</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            onChange={onChange}
                            value={nombre}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email"> Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            onChange={onChange}
                            value={email}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password"> Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            onChange={onChange}
                            value={password}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar"> Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            onChange={onChange}
                            value={confirmar}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit" 
                            className="btn btn-primario btn-block"
                             value="Registrarme"
                         />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta" >
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;