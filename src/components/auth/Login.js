import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    //State para iniciarsesion
    const [usuario, setUsuario] =useState({
        email:'',
        password:''
    })

    //Extraer usuario
    const {email, password} = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    } 

    const onSubmit = e =>{
        e.preventDefault()

        //Validar que no haya campos vacios 

        //pasarla al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesion</h1>
                <form
                    onSubmit={onSubmit}
                >
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
                        <input
                            type="submit" 
                            className="btn btn-primario btn-block"
                             value="Iniciar Sesión"
                         />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta" >
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;