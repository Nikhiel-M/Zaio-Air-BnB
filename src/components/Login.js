import React from 'react'
import './Login.css'

const Login = () => {
  const submitLogin = () => {

  }

  return (
    <div className='login-form'>
      <h2>Log in or Sign up</h2>
            <form onSubmit={submitLogin}>
            <button className='facebook-login'>Connect With Facebook</button>
            <button className='google-login'>Connect With Google</button>
            <div className='login-or center'>
                <span>or</span>
                <div className='or-divider'></div>
        </div>
            <input
                type='text'
                className='browser-default'
                placeholder='Email address'
                required
            />
            <input
                type='password'
                className='browser-default'
                placeholder='Password'
                required
            />
            <button className='sign-up-button'>Login</button>
            <div className='divider'></div>
            <div>Don't have an account? Sign up</div>
            </form>
    </div>
  )
}

export default Login