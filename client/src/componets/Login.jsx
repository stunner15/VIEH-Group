import React from 'react'
import {useState} from 'react'
import './SignUp.css'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Signup = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{
          console.log(result)
          if(result.data==="Success"){
            navigate('/home')

          }
       })
        .catch(err=>console.log(err))

    }

  return (
    <div className="body">
      <div className='container'>
      
        <div className="header">
            <div className="heading">Login</div>
        </div>
        <div className="inputs">
        
         <div className="input">
            <input type="email" placeholder='Email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
         </div>
         <div className="input">
            <input type="password" placeholder='Password' name='password' onChange={(e)=>setPassword(e.target.value)}/>
         </div>
        </div>
        
        <div className="button-container">
          <div className="submit" onClick={handleSubmit}>Login</div>
        </div>

        <div className='footer2'>
        <h2>Not a member<a href="http://localhost:5173/">SignUp</a></h2>
        </div>

      </div>
    </div>
  )
}

export default Signup