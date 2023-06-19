import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TiendaContext from '../../context/tienda/tiendaContext';

const BateriaVenta = () => {

    const navigate = useNavigate();


    const tiendaContext = useContext(TiendaContext);
    const { bateriasventa } = tiendaContext;

    return (
        <>
            <div className="row">
                {bateriasventa.map((bateria) => (
                    <div className="col-sm-3 mt-2 mb-2">
                        <div className="carta-bateria">
                            <div className="carta-imagen">
                                <img src={bateria.img} width="100" height="100" alt={'imagen bateria'} />
                            </div>
                            <hr />
                            <div className="carta-body">
                                <h5 className="carta-titulo">Bateria {bateria.marca}</h5>
                                <div className="row carta-voltaje">
                                    <div className="col">
                                        <p className=''>Voltaje:</p>
                                    </div>
                                    <div className="col">
                                        <p>{bateria.voltaje} V</p>
                                    </div>
                                </div>
                                <div className="row carta-precio">
                                    <div className="col">
                                        <p className=''>Precio:</p>
                                    </div>
                                    <div className="col">
                                        <p>{bateria.precio} €</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='carta-boton'>
                                <button className="btn botones mb-2" onClick={() => navigate(`tienda/item/${bateria._id}`)}> Comprar </button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
}

export default BateriaVenta;