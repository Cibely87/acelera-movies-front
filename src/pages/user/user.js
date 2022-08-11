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
      <form>
        <Input label="Login" type="email" placeholder='Digite seu login' onChange={handlerEmail} />
        <Input label="Password" type="text" placeholder='Digite sua senha' onChange={handlerPassword} />
        <a href="#">Esqueceu sua senha</a>
        <Button onClick={handlerClick} type='button' text='Entrar' />
      </form>
    </div>
  )
}
