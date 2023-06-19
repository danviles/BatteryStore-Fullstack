import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';


const Login = () => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    const navigate = useNavigate();

    useEffect(() => {

        if (autenticado) {
            navigate('/');
        }

        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    
    }, [mensaje, autenticado, navigate]);

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const { email, password } = usuario;

    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        // Pasarlo al action
        iniciarSesion({ email, password });
    }

    return (
        <div className="container-login">
            { alerta ? ( <div data-testid='alerta' className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }


            <h1 data-testid='titulo'>Iniciar Sesión</h1>

            <form
                onSubmit={onSubmit}
            >
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        data-testid='email'
                    />
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        data-testid='password'
                    />
                </div>

                <div className="campo-form d-grid">
                    <input type="submit" className="btn botones mb-2" value="Iniciar Sesión" data-testid='botonSubmit'/>
                </div>
            </form>

            <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                Regístrate
            </Link>

        </div>
    );
}

export default Login;