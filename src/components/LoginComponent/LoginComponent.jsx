import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginComponent.css'

const LoginComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()

        axios
            .post(`http://localhost:3500/api/v1/login`,
                { email: email, password: password })
            .then((response) => {
                if (response.status === 201) {
                    alert(`Welcome ${response.data.firstName} ${response.data.lastName} !`)
                    window.localStorage.setItem('token', response.data.token)
                    window.location.href = '/home'
                }
            })
            .catch((error) => {
                alert(`Status : ${error.response.status} - ${error.response.data.message}`)
            })
    }

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={formSubmitHandler}>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        placeholder='Enter your email address'
                        value={email}
                        onChange={emailHandler}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        placeholder='Enter your password'
                        value={password}
                        onChange={passwordHandler}
                        required
                    />
                </div>

                <div className='form-group text-left'>

                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                    <p >
                        New User? <Link to='/signup'>Register here!</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent
