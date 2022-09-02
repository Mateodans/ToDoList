import React, { useState } from 'react';
import '../stylesheets/form.css'
import { v4 as uuidv4 } from 'uuid'

function TareaForm(props){

    const [input, setInput] = useState('')

    const manejarCambio = e =>{
        setInput(e.target.value)
    }

    const manejarEnvio = e =>{
        e.preventDefault()

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva)
    }

    return(
        <form className='tarea-form'
        onSubmit={manejarEnvio}>
            <input type="text"
                className='tarea-input'
                placeholder='Escriba una tarea'
                name='text'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaForm;