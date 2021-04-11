import React, { useState } from 'react'
import { useToggle } from 'react-use'

const LoginForm = ({ loginUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, toggleAdmin] = useToggle(false)

  const adminButtonText = () => {
    return isAdmin ? 'trueUser Login' : 'falseAdmin Login'
  }

  const handleSubmit = () => {
    loginUser({ email: email, password: password, isAdmin: true })
  }

  return <div>
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
