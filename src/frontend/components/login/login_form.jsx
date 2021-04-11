import React, { useState } from 'react'
import { useToggle } from 'react-use'
import './login_form.scss'

const LoginForm = ({ loginUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, toggleAdmin] = useToggle(false)

  const adminButtonText = () => isAdmin ? 'Toggle to User' : 'Toggle To Admin'

  const formHeaderText = () => isAdmin ? 'Admin Login' : 'User Login'

  const handleSubmit = () => {
    loginUser({ email: email, password: password, isAdmin: isAdmin })
  }

  return <div className='login_form'>
    <h2>{formHeaderText()}</h2>
    <input onChange={(e) => setEmail(e.target.value)}
      placeholder='name'
      name='email'
    />
    <input onChange={(e) => setPassword(e.target.value)}
      type='password'
      placeholder='password'
      name='password'
    />
    <button onClick={() => toggleAdmin()}>
      {adminButtonText()}
    </button>
    <button onClick={() => handleSubmit()}>Login</button>
  </div>
}

export default LoginForm
