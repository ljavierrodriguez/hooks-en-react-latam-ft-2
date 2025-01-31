import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'email':
            return { ...state, email: action.value }
        case 'password':
            return { ...state, password: action.value }
    
        default: return state
    }
}

const LoginForm = () => {

    const [state, dispatch] = useReducer(reducer, { email: 'lrodriguez@4geeks.co', password: '123456' })

    return (
        <>
        <div>Login Form</div>
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" name='email' id='email' placeholder='Email' value={state.email}
                onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
            /> <br />
            <input type="password" name='password' id='password' placeholder='Password' value={state.password}
                onChange={(e) => dispatch({ type: 'password', value: e.target.value })}
            /> <br />
            <button>Login</button>
        </form>
        </>
    )
}

export default LoginForm