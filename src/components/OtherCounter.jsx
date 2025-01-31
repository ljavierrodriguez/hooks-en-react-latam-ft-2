import React, { useCallback, useState } from 'react'

const ChildComponent = ({ increment, decrement }) => {
    return (
        <>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}


const OtherCounter = () => {

    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount((count) => count + 1)
    })

    const decrement = useCallback(() => {
        setCount((count) => count - 1)
    })

    return (
        <div>
            <p>Other Counter</p>
            <p>Count: {count}</p>
            <ChildComponent increment={increment} decrement={decrement} />
        </div>
    )
}

export default OtherCounter