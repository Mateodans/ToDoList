import React from 'react';
import TareaForm from './form';
import '../stylesheets/lista.css'

function ListaDeTareas() {
    return (
        <>
            <TareaForm />
            <div className='tareas-listas-contenedor'>
            lista de tareas
            </div>
        </>
    )
}

export default ListaDeTareas;