import React, { useEffect, useState } from 'react'

const DataFetching = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

  return (
    <div>
        <p>Listado de Usuarios</p>
        <ul>
            {
                data.map((elem) => {
                    return (
                        <li key={elem.id}>{elem.name}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default DataFetching