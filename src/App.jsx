import React, { useState } from 'react'
import Counter from './components/Counter'
import Search from './components/Search'
import DataFetching from './components/DataFetching'
import ShowDate from './components/ShowDate'
import OtherCounter from './components/OtherCounter'
import Calculo from './components/Calculo'
import CounterUserReducer from './components/CounterUserReducer'
import LoginForm from './components/LoginForm'
import RenderizadoCondicionado from './components/RenderizadoCondicionado'
import FocusInput from './components/FocusInput'
import Gallery from './components/Gallery'
import ControlledInputs from './components/ControlledInputs'

const App = () => {

    const [data, setData] = useState([30, 20, 120, 49, 50, 70, 78, 100, 56, 17])

    return (
        <>
        <ControlledInputs />
        {/* <h1>React Hooks</h1>
        <div>
            <h3>Using useRef</h3>
            <Gallery />
            <h3>Using useState:</h3>
            <Counter />
            <Search />
            <h3>Using useEffect:</h3>
            <DataFetching />
            <ShowDate />
            <h3>Using useCallback</h3>
            <OtherCounter />
            <h3>Using useMemo</h3>
            <Calculo data={data} />
            <h3>Using useReducer</h3>
            <CounterUserReducer />
            <LoginForm />
            <h3>Renderizado Condicionado</h3>
            <h6>Operador Ternario</h6>
            <RenderizadoCondicionado />
            <h3>Using useRef</h3>
            <FocusInput />

        </div> */}
        </>
    )
}

export default App