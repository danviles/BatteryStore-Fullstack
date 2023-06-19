import {
    COMPRA_BATERIA,
    TIENDA_BATERIAS,
    TIENDA_COMPRA,
    COMPRA_ERROR,
    MENSAJE_TIENDA
} from "../../types";

export default (state, action) => {
    switch (action.type) {

        case TIENDA_BATERIAS:
            return {
                ...state,
                bateriasventa: action.payload,
                bateriacompra: null,
                cargando: false
            }
        case TIENDA_COMPRA:
            return {
                ...state,
                bateriacompra: action.payload,
                cargando: false
            }
        case COMPRA_BATERIA:
        case MENSAJE_TIENDA:
        case COMPRA_ERROR:
            return {
                ...state,
                bateriacompra: null,
                mensaje: action.payload,
                cargando: false
            }
        default:
            return state;
    }
}