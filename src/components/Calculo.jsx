import React, { useMemo } from 'react'

const Calculo = ({ data }) => {

    const calculoCostoso = useMemo(() => {
        return data.map((item) => item ** 2) // [1, 2, 3]
    }, [data])

    return (
        <div>
            <p>Calculo Costoso: {calculoCostoso.join(', ')}</p>
        </div>
    )
}

export default Calculo