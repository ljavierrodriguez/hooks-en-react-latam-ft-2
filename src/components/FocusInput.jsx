import React, { useEffect, useRef } from 'react'

const FocusInput = () => {

    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(inputRef.current.value)

    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Escribe tu nombre...' ref={inputRef} />
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default FocusInput