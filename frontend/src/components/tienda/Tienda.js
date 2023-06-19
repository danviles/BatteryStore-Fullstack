import React, { useContext, useEffect } from 'react';
import BateriaVenta from './BateriaVenta';
import TiendaContext from '../../context/tienda/tiendaContext';


const Tienda = () => {

    const tiendaContext = useContext(TiendaContext);
    const { bateriasventa, obtenerBateriasVenta } = tiendaContext;


    useEffect(() => {
        obtenerBateriasVenta();
    }, []);
    
    if(bateriasventa.length === 0) return <div className='container m-5'><h2>No hay baterías en venta en este momento.</h2></div>

    return (
        <>
            <div className="container container-tienda mt-5 mb-5">
                <h2>Baterías en venta</h2>
                <BateriaVenta />
            </div>
        </>
    );
}

export default Tienda;