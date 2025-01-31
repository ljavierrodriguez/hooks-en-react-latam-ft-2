import React, { useState } from 'react'

const RenderizadoCondicionado = () => {

    const [show, setShow] = useState(false)
    const [error, setError] = useState(null)
    /* 
    Operador Ternario

    condicion ? true : false

    condicion && return

    */
    return (
        <div>

            {/* <a href="" className={'nav-link ' + (url === '/' ? 'active': '')}>Home</a> */}

            <p>Renderizado Condicionado</p>

            {
                show ? (
                    <p>Contenido Oculto</p>
                ):(
                    <button onClick={() => setShow(!show)}>Mostrar Contenido Oculto</button>
                )
            }

            <button onClick={() => setError({ message: 'Ha ocurrido un error!'})}>Crear Error</button>

            {
                !!error && (
                    <div>{error.message}</div>
                )
            }

        </div>
    )
}

export default RenderizadoCondicionado