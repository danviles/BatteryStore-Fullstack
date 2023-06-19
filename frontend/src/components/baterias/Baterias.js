import React from 'react';
import FormularioBaterias from './FormularioBaterias';
import ListadoBaterias from './ListadoBaterias';

const Baterias = () => {
    return (
        <>
        <div className = "text-center">
            <FormularioBaterias />
            <ListadoBaterias />
        </div>
        </>
    );
}
 
export default Baterias;