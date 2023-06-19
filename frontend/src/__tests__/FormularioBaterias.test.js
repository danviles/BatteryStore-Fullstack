import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import AlertaState from '../context/alertas/alertaState';
import AuthState from '../context/autenticacion/authState';
import BateriaState from '../context/baterias/bateriaState';
import FormularioBaterias from '../components/baterias/FormularioBaterias';
import Baterias from '../components/baterias/Baterias';

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'



test('<FormularioBaterias /> Cargando formulario y haciendo testing.', () => {

    const wrapper = render(
        <AuthState>
            <AlertaState>
                <BateriaState>
                    <BrowserRouter>
                        <Baterias >
                            <FormularioBaterias />
                        </Baterias>
                    </BrowserRouter>
                </BateriaState>
            </AlertaState>
        </AuthState>
    );

    const boton_bateria = screen.getByTestId('botonBateria');
    expect(screen.getByTestId('marca').tagName).toBe('SELECT');
    expect(screen.getByTestId('estado').tagName).toBe('SELECT');
    expect(screen.getByTestId('voltaje').tagName).toBe('INPUT');
    expect(screen.getByTestId('amperios').tagName).toBe('INPUT');
    expect(screen.getByTestId('precio').tagName).toBe('INPUT');
    expect(boton_bateria.tagName).toBe('INPUT');

    userEvent.click(boton_bateria);
    expect(screen.queryByTestId('alerta').textContent).toBe(' Todos los campos son obligatorios ');

    // userEvent.selectOptions(screen.getByTestId('marca'), 'yuasa');
    // userEvent.selectOptions(screen.getByTestId('estado'), 'nuevo');
    // userEvent.type(screen.getByTestId('voltaje'), '1');
    // userEvent.type(screen.getByTestId('amperios'), '2');
    // userEvent.type(screen.getByTestId('precio'), '3');
    // userEvent.click(boton_bateria);
    
});