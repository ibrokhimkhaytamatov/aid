import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className="">
<div className='login'>
      <form className='text-center' action="">
        <input className='my-3 p-2' type="email" placeholder='email' />
        <input className='p-2' type="password" placeholder='password' />
        <br />
        <button style={{width:'100px'}} className='btn btn-success mt-5'>Kirish</button>
      </form>
    </div>
    </div>
    
  )
}

export default Login
