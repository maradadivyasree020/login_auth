import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

const ResetPassword = () => {
    const [password, setPassword] = useState('')

    const navigate=useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();
        Axios.post('http://127.0.0.1:3000/auth/reset-password',{password,})
        .then(response=>{
            console.log(response)
            console.log(response.status)
            if(response.status==200){
                alert("check your mail")
                console.log("mail")
                navigate('/login')
            }
            else{
            console.log("mail")
            }
        })
        .catch(err=>{console.log(err)})

    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>
                <label htmlFor='email'>Email:</label>
                <input type="email" placeholder='Email' autoComplete='off' onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ResetPassword