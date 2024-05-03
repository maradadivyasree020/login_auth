import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate=useNavigate()

    Axios.defaults.withCredentials=true;

    const handleSubmit =(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3000/auth/login',{email,password})
        .then(response=>{
            if(response.data.status)
            navigate('/')
        })
        .catch(err=>{console.log(err)})
    }

    return (
        <div className='container'>
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2 style={{ color: 'white',fontFamily: 'Roboto' }}>Log In</h2>
                <label className='field-label' htmlFor='email' style={{ color: 'white',fontFamily: 'Roboto' }}>Email:</label>
                <input  className='field-input' type="email" placeholder='Email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                <label className='field-label' htmlFor='password' style={{ color: 'white',fontFamily: 'Roboto' }}>Password:</label>
                <input  className='field-input' type="password" placeholder='*****' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Log In</button>
                <Link className='forgot-password' to="/forgotPassword" style={{ color: 'white',fontFamily: 'Roboto' }}>Forgot Password?</Link>
                <p style={{ color: 'white' ,fontFamily: 'Roboto'}}>Don't Have an Account?</p>
                <Link to='/signup' style={{ color: 'white',fontFamily: 'Roboto' }}>Sign Up</Link>
            </form>
        </div>
        </div>
    )
}

export default Login