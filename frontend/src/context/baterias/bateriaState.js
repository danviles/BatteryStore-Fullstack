import React, { useReducer } from 'react';
import BateriaContext from './bateriaContext';
import BateriaReducer from './bateriaReducer';
import clienteAxios from '../../config/axios';



import {
    OBTENER_BATERIAS,
    AGREGAR_BATERIA,
    BATERIA_ACTUAL,
    ELIMINAR_BATERIA,
    EDITAR_BATERIA
} from "../../types";




const BateriaState = props => {

    const imagenes = {};
    imagenes['bosch'] = 'https://drive.google.com/uc?export=view&id=1oYhkawjImeGKWIsBfPhEY9z3VyvA0kcN';
    imagenes['norauto'] = 'https://drive.google.com/uc?export=view&id=1djOf91ZWtm7-nHCmZ3kRAyXt76ynbR59';
    imagenes['yuasa'] = 'https://drive.google.com/uc?export=view&id=1YJJE3430LPi6kgR7_HWXb5LYQf_GI2KH';
    imagenes['innpo'] = 'https://drive.google.com/uc?export=view&id=1XqqkKySVLcv9xrBAHotcnF8Z9W3vB3nY';
    imagenes['tudor'] = 'https://drive.google.com/uc?export=view&id=1Og9C0fMsyQhFk_N6O_SVybf1wjjI3lhT';
    imagenes['exide'] = 'https://drive.google.com/uc?export=view&id=19O4I3khj5Gh42K2einLyWOp-TunEsMGI';
    imagenes['varta'] = 'https://drive.google.com/uc?export=view&id=16awhe9WVfkqKAiFmOadhh2j1sgcysCif';


    const initialState = {
        imagenesbaterias : imagenes,
        baterias: [],
        bateriaactual: null,
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(BateriaReducer, initialState)


    const obtenerBaterias = (async () => {
        try {
            const resultado = await clienteAxios.get('/api/baterias'); 
            console.log(resultado); 
            dispatch({
                type: OBTENER_BATERIAS,
                payload: resultado.data.baterias
            })
        } catch (error) {
            console.log(error);
        }
    })

    const agregarBateria = (async (bateria) => {
        try {
            const resultado = await clienteAxios.post('/api/baterias', bateria);
            dispatch({
                type: AGREGAR_BATERIA,
                payload: bateria
            })
        } catch (error) {
            console.log(error.data)
        }
    })

    const bateriaActual = ((bateria)=>{
        dispatch({
            type: BATERIA_ACTUAL,
            payload: bateria
        })
    })

    const eliminarBateria = (async (bateria)=>{
        try {
            const resultado = await clienteAxios.delete(`/api/baterias/${bateria._id}`);

            dispatch({
                type: ELIMINAR_BATERIA,
                payload: bateria
            })
        } catch (error) {

            console.log(error)
        }

    })

    const editarBateria = (async (bateria) => {

        try {
            const resultado = await clienteAxios.put(`/api/baterias/${bateria._id}`, bateria);
            console.log(resultado);
            dispatch({
                type: EDITAR_BATERIA,
                payload: resultado.data.bateria
            })
            obtenerBaterias()
        } catch (error) {
            console.log(error);
        }
    })


    return (
        <BateriaContext.Provider
            value={{
                baterias: state.baterias,
                bateriaactual: state.bateriaactual,
                imagenesbaterias: state.imagenesbaterias,
                obtenerBaterias,
                agregarBateria,
                bateriaActual,
                eliminarBateria,
                editarBateria
            }}
        >
            {props.children}
        </BateriaContext.Provider>
    )
}

export default BateriaState;