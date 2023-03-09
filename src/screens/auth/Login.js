import React from 'react'
import { loginEndPoint } from '../../spotify'

export default function Login() {
  return (
    <div className='login-container'>
        <a href={loginEndPoint}>Login</a>
    </div>
  )
}
