import React, { useRef, useState } from 'react'

const ControlledInputs = () => {
    
    const [name, setName] = useState("Luis")
    const [volume, setVolume] = useState(50)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleValue = (e) => {
        console.log("Evento:", e)
        console.log("Tecla:", e.key)
        console.log("Value Input:", e.target.value)
        setName(e.target.value)
    } 

    const searchRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        console.log("Parametro a buscar:", searchRef.current.value)
        alert("Parametro a buscar: " + searchRef.current.value)
    }

    const handleLogin = e => {
        e.preventDefault()

        console.log("Email: ", email)
        console.log("Password: ", password)
    }

    return (
        <>
        <div>Controlled Inputs</div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Insert name' />
        <hr />
        <input type="text" onKeyUp={handleValue} placeholder='Insert Value' />
        <hr />
        <input type="text" defaultValue={name} />
        <hr />
        <input type="range" min={0} max={100} step={1} value={volume} onChange={(e) => setVolume(e.target.value)} />
        <input type="number" min={0} max={100} value={volume} onChange={(e) => setVolume(e.target.value)} />
        <hr />

        <form onSubmit={handleSubmit}>
            <input type="search" ref={searchRef} placeholder='Search...' />
            <button>Search</button>
        </form>

        <hr />

        <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /> <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /> <br />
            <button>Login</button>
        </form>

        </>
    )
}

export default ControlledInputs