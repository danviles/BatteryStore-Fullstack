import React, { useContext, useEffect } from 'react';
import BateriaContext from "../../context/baterias/bateriaContext";
import Bateria from "./Bateria";

const ListadoBaterias = () => {

    const bateriaContext = useContext(BateriaContext);
    const { baterias, obtenerBaterias } = bateriaContext;


    useEffect(() => {
        obtenerBaterias();
    }, []);

    if (baterias.length === 0) return <p>No tienes baterías en venta.</p>;

    return (
        <div className="container mb-5">
            <ul className="list-group">
                {baterias.map(bateria => (
                    <Bateria key={bateria._id} bateria={bateria} />
                ))}
            </ul>
        </div>
    );
}

export default ListadoBaterias;