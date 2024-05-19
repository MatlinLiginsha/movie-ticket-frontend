import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './SignupComponent.css'

const SignupComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const firstNameHandler = (event) => {
        setFirstName(event.target.value)
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value)
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()

        axios
            .post(`http://localhost:3500/api/v1/signup`, { firstName, lastName, email, password })
            .then((response) => {
                alert(`Successfully created account for ${response.data.firstName} ${response.data.lastName} !`)
                window.location.href = '/'
            })
            .catch((error) => {
                alert(`Status : ${error.response.status} - ${error.response.data.message}`)
            })
    }

    return (
        <div className="form-container">
            <h2>Sign up</h2>
            <form onSubmit={formSubmitHandler}>
                <div className='form-group'>
                    <label>First Name</label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Enter your first name'
                        value={firstName}
                        onChange={firstNameHandler}
                        required
                    />
                </div>

                <div className='form-group'>
                    <label>Last Name</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter your last name'
                        value={lastName}
                        onChange={lastNameHandler}
                        required
                    />
                </div>

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

                <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>

                <p className='text-left'>
                    Already registered? <Link to='/login'>Sign in here</Link>
                </p>
            </form>
        </div>
    )
}

export default SignupComponent
