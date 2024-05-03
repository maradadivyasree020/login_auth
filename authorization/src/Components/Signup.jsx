import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate=useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3000/auth/signup',{username,email,password})
        .then(response=>{
            if(response.data.status)
            navigate('/login')
        })
        .catch(err=>{console.log(err)})

    }

    return (
        <div className='container'>
        <div className='sign-up-container1'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2 style={{ color: 'white',fontFamily: 'Roboto' }}>Sign Up</h2>
                <label className='field-label' htmlFor='username' style={{ color: 'white',fontFamily: 'Roboto' }}>Username:</label>
                <input  className='field-input' type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                <label className='field-label' htmlFor='email' style={{ color: 'white',fontFamily: 'Roboto' }}>Email:</label>
                <input  className='field-input' type="email" placeholder='Email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                <label className='field-label' htmlFor='password' style={{ color: 'white',fontFamily: 'Roboto' }}>Password:</label>
                <input  className='field-input' type="password" placeholder='*****' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' style={{ color: 'white',fontFamily: 'Roboto' }}>SignUp</button>
                <p style={{ color: 'white',fontFamily: 'Roboto' }}>Have an Account?</p><Link to='/login' style={{ color: 'white' ,fontFamily: 'Roboto'}}>Login</Link>
            </form>
        </div>
        </div>
    )
}

export default Signup