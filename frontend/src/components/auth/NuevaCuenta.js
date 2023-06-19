import React, { useState, useContext, useEffect } from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';
import { Link, useNavigate } from 'react-router-dom';

const NuevaCuenta = () => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;
    
    const authContext = useContext(AuthContext); 
    const { mensaje, autenticado, registrarUsuario } = authContext;

    const navigate = useNavigate();

    // En caso de que el usuario ya exista

    useEffect(() => {

        if (autenticado) {
            navigate('/');
        }

        if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    
    }, [mensaje, autenticado, navigate]);
    

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, apellido, email, password, confirmar } = usuario;

    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if( nombre.trim() === '' || 
            email.trim() === '' || 
            password.trim() === '' || 
            confirmar.trim() === '' ) {
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
            }

        // Password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        // Los 2 passwords son iguales
        if(password !== confirmar) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }

        registrarUsuario({
            nombre,
            apellido,
            email,
            password
        });

        // Pasarlo al action
        // registrarUsuario({
        //     nombre, 
        //     email, 
        //     password
        // });
    }

    return (
        <div className="container-register">
            { alerta ? ( <div data-testid='alerta'className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
            
                <h1 data-testid='titulo'>Registrarse</h1>

                <form
                 onSubmit={onSubmit}
                >
                    <div className="mb-3 mt-3">
                        <label htmlFor="name" className="form-label">Nombre:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nombre" 
                            name="nombre"
                            value={nombre}
                            onChange={onChange}
                            data-testid='nombre'
                        /> 
                    </div>

                    <div className="mb-3 mt-3">
                        <label htmlFor="secondname" className="form-label">Apellido:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="apellido" 
                            name="apellido"
                            value={apellido}
                            onChange={onChange}
                            data-testid='apellido'
                        /> 
                    </div>

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

                    
                    <div className="mb-3 mt-3">
                        <label htmlFor="confirmpassword" className="form-label">Repite la contraseña:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="confirmar" 
                            name="confirmar"
                            value={confirmar}
                            onChange={onChange}
                            data-testid='repassword'
                        /> 
                    </div>

                    <div className="campo-form d-grid">
                        <input data-testid='botonSubmit' type="submit" className="btn botones mb-2" value="Crear cuenta" />
                    </div>
                </form>

                <Link to={'/login'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            
        </div>
    );
}

export default NuevaCuenta;