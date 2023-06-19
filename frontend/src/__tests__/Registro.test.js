import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import AlertaState from '../context/alertas/alertaState';
import AuthState from '../context/autenticacion/authState';


import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NuevaCuenta from '../components/auth/NuevaCuenta';


test('<Registro /> Cargando formulario y haciendo testing.', () => {

    const wrapper = render(
        <AuthState>
            <AlertaState>
                <BrowserRouter>
                    <NuevaCuenta />
                </BrowserRouter>
            </AlertaState>
        </AuthState>
    );

    const boton_submit = screen.getByTestId('botonSubmit');
    expect(screen.getByTestId('titulo').textContent).toBe('Registrarse');
    expect(screen.getByTestId('nombre').tagName).toBe('INPUT');
    expect(screen.getByTestId('apellido').tagName).toBe('INPUT');
    expect(screen.getByTestId('email').tagName).toBe('INPUT');
    expect(screen.getByTestId('password').tagName).toBe('INPUT');
    expect(screen.getByTestId('repassword').tagName).toBe('INPUT');
    expect(boton_submit.tagName).toBe('INPUT');

    userEvent.click(boton_submit);
    expect(screen.queryByTestId('alerta').textContent).toBe(' Todos los campos son obligatorios ');

});