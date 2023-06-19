import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TiendaContext from '../../context/tienda/tiendaContext';
import AuthContext from '../../context/autenticacion/authContext';

const BateriaCompra = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const tiendaContext = useContext(TiendaContext);
    const { mensaje, bateriacompra, cargando, obtenerBateriaID, comprarBateria } = tiendaContext;

    const authContext = useContext(AuthContext);
    const { autenticado } = authContext;

    useEffect(() => {
        obtenerBateriaID(id);

    }, [cargando]);

    const onClickComprar = (() => {
        if (autenticado) {
            comprarBateria(id)
            //navigate('/');
        } else {
            navigate('/login');
        }
    });

    if (!bateriacompra) return <div className='container'><h2>{mensaje.msg}</h2></div>

    return (
        <>
            <div className="container-venta">
                <div className="informacion-venta">
                    <img className="img-fluid" src={bateriacompra.img}  alt={'imagen bateria'} />
                    <div className="titulo-venta">
                        <h2>Bateria {bateriacompra.marca}</h2>
                    </div>
                    <hr />
                    <div className="precio-venta">
                        <h3>{bateriacompra.precio}€</h3>
                    </div>
                    <hr />
                    <div className="descripcion-venta">
                        <p className='texto-izquierdo'>Estado <span className='texto-derecho'>{bateriacompra.estado}</span></p>
                        <hr />
                        <p className='texto-izquierdo'>Voltaje <span className='texto-derecho'>{bateriacompra.voltaje} V</span></p>
                        <hr />
                        <p className='texto-izquierdo'>Amperios <span className='texto-derecho'>{bateriacompra.amperios}</span></p>
                    </div>
                    <div className="d-grid">
                        <button className='btn botones mb-2' onClick={onClickComprar}> Comprar </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BateriaCompra;