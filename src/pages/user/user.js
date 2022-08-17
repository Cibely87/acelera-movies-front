import { Input } from '../../components/input'
import { Button } from '../../components/button'
import './user.css'
import { useState } from 'react'
import { client } from '../../service/client'
import { useNavigate } from 'react-router-dom'

export const User = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handlerEmail = (target) => {
    setEmail(target.value)
  }

  const handlerPassword = (target) => {
    setPassword(target.value)
  }

  const handlerClick = () => {
    const userLogin = { email, password }
    client.post('/login', userLogin)
    navigate('/home')
  }

  return (
    <div className='container'>
      <form className='formUser'>
        <Input label="Login" type="email" placeholder='Enter your login' onChange={handlerEmail} />
        <Input label="Password" type="text" placeholder='Type your password' onChange={handlerPassword} />
        <a href="#">Recover your password</a>
        <Button classname="buttonUser" onClick={handlerClick} type='button' text='log in' />
      </form>
    </div>
  )
}
