import React, { useEffect, useState } from 'react'

const ShowDate = () => {

    const [currentDate, setCurrentDate] = useState(null)
    const [count, setCount] = useState(0)
    useEffect(() => {

        // renderizando el componente la primera vez
        let interval = setInterval(() => {
            setCurrentDate(new Date().toLocaleTimeString())
            setCount(count => count + 1)
        }, 1000)


        return () => {
            clearInterval(interval)
        }

    }, [])


    return (
        <div>
            <p>Count: {count}</p>
            <p>Time: {currentDate}</p>
        </div>
    )
}

export default ShowDate