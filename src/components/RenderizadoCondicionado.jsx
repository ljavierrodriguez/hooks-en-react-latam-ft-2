import React, { useEffect, useState } from 'react'

const ComponentA = () => {
    return (
        <h1>Component A</h1>
    )
}

const ComponentB = () => {
    return (
        <h1 className="text-danger">Component B</h1>
    )
}


const RenderizadoCondicionado = () => {

    const [matriz, setMatriz] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ])
    
    const [arreglo, setArreglo] = useState([null, null, null, null, null, null, null, null, null])

    const [show, setShow] = useState(false)
    const [error, setError] = useState(null)
    /* 
    Operador Ternario

    condicion ? true : false

    condicion && return

    */

    useEffect(() => {
        jugar()
    }, [])

    const jugar = () => {
        const newArreglo = [...arreglo]
        newArreglo[4] = null
        setArreglo(newArreglo)
    }


    return (
        <div>

            {/* <a href="" className={'nav-link ' + (url === '/' ? 'active': '')}>Home</a> */}

            <p>Renderizado Condicionado</p>

            {
                show ? (
                    <p>Contenido Oculto</p>
                ) : (
                    <button onClick={() => setShow(!show)}>Mostrar Contenido Oculto</button>
                )
            }

            {
                show ? (
                    <ComponentA />
                ) : (
                    <ComponentB />
                )
            }

            <button onClick={() => setError({ message: 'Ha ocurrido un error!' })}>Crear Error</button>

            {
                !!error && (
                    <div>{error.message}</div>
                )
            }

        </div>
    )
}

export default RenderizadoCondicionado



