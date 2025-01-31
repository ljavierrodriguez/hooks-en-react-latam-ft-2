import React, { useState } from 'react'
import Counter from './components/Counter'
import Search from './components/Search'
import DataFetching from './components/DataFetching'
import ShowDate from './components/ShowDate'
import OtherCounter from './components/OtherCounter'
import Calculo from './components/Calculo'
import CounterUserReducer from './components/CounterUserReducer'
import LoginForm from './components/LoginForm'

const App = () => {

    const [data, setData] = useState([30, 20, 120, 49, 50, 70, 78, 100, 56, 17])

    return (
        <>
        <h1>React Hooks</h1>
        <div>
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
        </div>
        </>
    )
}

export default App