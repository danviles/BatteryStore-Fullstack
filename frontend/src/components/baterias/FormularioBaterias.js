import React, { useContext, useState, useEffect } from 'react';
import BateriaContext from '../../context/baterias/bateriaContext';
import AlertaContext from '../../context/alertas/alertaContext';
import NullImg from '../../images/subir-imagen.png';

const FormularioBaterias = () => {

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext

    const bateriaContext = useContext(BateriaContext);
    const { bateriaactual, imagenesbaterias, agregarBateria, editarBateria, obtenerBaterias } = bateriaContext



    const [bateria, setBateria] = useState({
        img: '',
        marca: '',
        estado: '',
        voltaje: '',
        amperios: '',
        precio: ''
    })

    const { img, marca, estado, voltaje, amperios, precio } = bateria;

    useEffect(() => {
        if (bateriaactual) {
            const [bateria] = bateriaactual
            setBateria(bateria)
        } else {
            setBateria({
                img: '',
                marca: '',
                estado: '',
                voltaje: '',
                amperios: '',
                precio: ''
            })
        }
    }, [bateriaactual]);


    const onChange = e => {

        if (e.target.name === 'marca') {
            setBateria({
                ...bateria,
                [e.target.name]: e.target.value,
                img : imagenesbaterias[e.target.value]
            })
        } else {
            setBateria({
                ...bateria,
                [e.target.name]: e.target.value
            })
        }
    }

    const onSubmitBateria = ((e) => {
        e.preventDefault();
        // validaciones

        if (marca.trim() === '' || estado.trim() === '' || voltaje === '' || amperios === '' || precio === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        // Agregar o actualizar

        if (!bateriaactual) {

            // Agregar tarea
            // tarea.proyectoId = proyecto.id;
            // tarea.estado = false;
            // tarea.id = uuid()
            // agregarTarea(tarea);
            agregarBateria(bateria);

        } else {
            editarBateria(bateria);

        }

        //obtenerBaterias()
        // limpiar campos

        setBateria({
            img: '',
            marca: '',
            estado: '',
            voltaje: '',
            amperios: '',
            precio: ''
        })
    });


    return (
        <div className="container-publicar rounded border border-dark mt-5 mb-5">
            {alerta ? (<div data-testid='alerta' className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <form onSubmit={onSubmitBateria}>
                <div className="">

                    <img className="mb-2" src={bateria.img ? bateria.img : NullImg} width="100" height="100" alt="Null Img" />
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                        <div className="mt-2 mb-2">
                            <label htmlFor="select">Marca</label>
                            <select data-testid='marca'className="form-select" name="marca" value={marca} onChange={onChange}>
                                <option value="" selected disabled hidden>Seleciona una marca</option>
                                <option value="yuasa">Yuasa</option>
                                <option value="bosch">Bosch</option>
                                <option value="innpo">Innpo</option>
                                <option value="norauto">Norauto</option>
                                <option value="exide">Exide</option>
                                <option value="tudor">Tudor</option>
                                <option value="varta">Varta</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="mt-2 mb-2">
                            <label htmlFor="select">Estado de la batería</label>
                            <select data-testid='estado' className="form-select" name="estado" value={estado} onChange={onChange}>
                                <option value="" selected disabled hidden>Seleciona un estado</option>
                                <option value="nuevo">Nueva</option>
                                <option value="buen-estado">Buen estado</option>
                                <option value="condiciones-aceptables">Condiciones aceptables</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mt-2 mb-2">
                            <label htmlFor="voltaje">Voltaje</label>
                            <input
                                type="number"
                                className="form-control"
                                id="voltaje"
                                name="voltaje"
                                placeholder="Voltaje de la batería"
                                min='0'
                                value={voltaje}
                                onChange={onChange}
                                data-testid='voltaje'
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mt-2 mb-2">
                            <label htmlFor="amperios">Amperios</label>
                            <input
                                type="number"
                                className="form-control"
                                id="amperios"
                                name="amperios"
                                placeholder="Amperios de la batería"
                                min='0'
                                value={amperios}
                                onChange={onChange}
                                data-testid='amperios'
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mt-2 mb-2">
                            <label htmlFor="precio">Precio</label>
                            <input
                                type="number"
                                className="form-control"
                                id="precio"
                                name="precio"
                                placeholder="Precio de la batería"
                                min='0'
                                value={precio}
                                onChange={onChange}
                                data-testid='precio'
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-2 mb-2">
                    <input
                        type="submit"
                        className="btn botones"
                        value={bateriaactual ? 'Editar' : 'Publicar'}
                        data-testid='botonBateria'
                    />
                </div>
            </form>
        </div>
    );
}

export default FormularioBaterias;