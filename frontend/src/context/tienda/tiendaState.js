import React, { useReducer } from 'react';
import TiendaContex from './tiendaContext';
import TiendaReducer from './tiendaReducer';
import clienteAxios from '../../config/axios';
//import { v4 as uuid } from "uuid";

import {
    COMPRA_BATERIA,
    TIENDA_BATERIAS,
    TIENDA_COMPRA,
    COMPRA_ERROR,
    MENSAJE_TIENDA
} from "../../types";

const TiendaState = props => {


    const initialState = {
        bateriasventa : [],
        bateriacompra : null,
        cargando: false,
        mensaje: ''
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(TiendaReducer, initialState)

    const obtenerBateriasVenta = (async () => {
        try {
            const resultado = await clienteAxios.get('/api/Tienda');  
            dispatch({
                type: TIENDA_BATERIAS,
                payload: resultado.data.baterias
            })
        } catch (error) {
            console.log(error);
        }
    })

    const obtenerBateriaID = (async (id) => {
        try {
            const resultado = await clienteAxios.get(`/api/tienda/item/${id}`);  
            dispatch({
                type: TIENDA_COMPRA,
                payload: resultado.data.bateria
            })
        } catch (error) {
            const mensaje = {
                msg: 'La bateria no existe.',
                tipo: 'error-mensaje'
            }
            dispatch({
                type: MENSAJE_TIENDA,
                payload: mensaje
            })
        }
    })

    const comprarBateria = (async (id) => {
        try {
            const resultado = await clienteAxios.delete(`/api/tienda/comprar/${id}`);  
            const mensaje = {
                msg: 'Gracias por tu compra.',
                tipo: 'success-mensaje'
            }
            dispatch({
                type: COMPRA_BATERIA,
                payload: mensaje
            })
        } catch (error) {
            const mensaje = {
                msg: 'Hubo un error en la compra, intentalo mas tarde',
                tipo: 'error-mensaje'
            }
            dispatch({
                type: COMPRA_ERROR,
                payload: mensaje
            })
        }
    })

    return (
        <TiendaContex.Provider
            value={{
                bateriasventa: state.bateriasventa,
                bateriacompra: state.bateriacompra,
                cargando: state.cargando,
                mensaje: state.mensaje,
                obtenerBateriasVenta,
                obtenerBateriaID,
                comprarBateria
            }}
        >
            {props.children}
        </TiendaContex.Provider>
    )
}

export default TiendaState;