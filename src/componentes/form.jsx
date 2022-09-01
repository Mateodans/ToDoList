import React from 'react';
import '../stylesheets/form.css'

function TareaForm(props){
    return(
        <form className='tarea-form'>
            <input type="text"
                className='tarea-input'
                placeholder='Escriba una tarea'
                name='text'
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaForm;