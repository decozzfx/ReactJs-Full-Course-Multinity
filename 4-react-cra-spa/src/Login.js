import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    function loginHandler(e) {
        e.preventDefault()
        console.info('login')

        const login = true
        if(login){
            navigate('/dashboard')
        }

    }

    return (
        <div>
            <form onSubmit={loginHandler}>
                <label>Username</label>
                <input type="text" name='username' />
                <br />
                <label>Password</label>
                <input type="password" name='password' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
