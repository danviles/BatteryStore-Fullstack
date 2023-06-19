import React, { useContext } from 'react';
import BateriaContext from '../../context/baterias/bateriaContext';
import NullImg from '../../images/subir-imagen.png';


const Bateria = ({ bateria }) => {

    const bateriaContext = useContext(BateriaContext);
    const { obtenerBaterias, bateriaActual, eliminarBateria } = bateriaContext;


    const onClickEliminar = (() => {
        eliminarBateria(bateria);
        obtenerBaterias();
    })

    return (
        <div className="container">

            <li className='list-group-item baterias'>
                <img className="mb-2" src={bateria.img} width="100" height="100" alt={'imagen bateria'} />
                <p>Marca : {bateria.marca}</p>
                <p>Estado : {bateria.estado}</p>
                <p>Voltaje : {bateria.voltaje}</p>
                <p>Amperios : {bateria.amperios}</p>
                <p>Precio : {bateria.precio} €</p>
                <div className="acciones">
                    <button
                        type="button"
                        className="btn botones"
                        onClick={() => bateriaActual(bateria)}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="btn botones bg-danger"
                        onClick={onClickEliminar}
                    >
                        Eliminar
                    </button>
                </div>
            </li>
        </div>
    );
}

export default Bateria;