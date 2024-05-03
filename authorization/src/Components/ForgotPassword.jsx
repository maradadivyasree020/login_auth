import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const navigate=useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();
        Axios.post('http://127.0.0.1:3000/auth/login',{email,password})
        .then(response=>{
            if(response.data.status)
            navigate('/login')
        })
        .catch(err=>{console.log(err)})
    }
    

    // const handleSubmit =(e)=>{
    //     e.preventDefault();
    //     Axios.post('http://127.0.0.1:3000/auth/forgot-password',{email,password})
    //     .then(response=>{
    //         console.log(response)
    //         console.log(response.status)
    //         alert('sghxbaaaaaaaaaaaaaaa')
    //         // if(response.data.status){
    //         //     alert("check your mail")
    //         //     console.log("mail")
    //         //     navigate('/login')
    //         // }
    //         // else{
    //         // console.log("mail")
    //         // }
    //     })
    //     .catch(err=>{
    //         alert("err")
    //         console.log(err)})

    // }

    return (
        <div className='container'>
        <div className='sign-up-container2'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2 style={{ color: 'white',fontFamily: 'Roboto' }}>Forgot Password</h2>
                <label className='field-label' htmlFor='email' style={{ color: 'white',fontFamily: 'Roboto' }}>Email:</label>
                <input className='field-input' type="email" placeholder='Email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                <label className='field-label' htmlFor='password' style={{ color: 'white',fontFamily: 'Roboto' }}>Enter new Password:</label>
                <input className='field-input' type="password" placeholder='*****' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' style={{ color: 'white' }}>Send</button>
            </form>
        </div>
        </div>
    )
}

export default ForgotPassword