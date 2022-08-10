import { Input } from '../../components/input'
import { Button } from '../../components/button'
import './user.css'
import { useState } from 'react'
import { client } from '../../service/client'
import { Link } from 'react-router-dom'

export const User = () => {
  /* const userEmail = (email) => console.log(email)
  const userPassword = (password) => console.log(password) */

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlerEmail = (target) => {
    setEmail(target.value)
  }

  const handlerPassword = (target) => {
    setPassword(target.value)
  }

  const handlerClick = () => {
    const userLogin = { email, password }
    client.post('/login', userLogin)
    alert('Acesso com sucesso!')
  }

  return (
    <div className='container'>
      <form>
        <Input label="Login" type="email" placeholder='Digite seu login' onChange={handlerEmail} />
        <Input label="Password" type="text" placeholder='Digite sua senha' onChange={handlerPassword} />
        <a href="#">Esqueceu sua senha</a>
        <Button onClick={handlerClick} type='button' text='Entrar' />
        <Link to='/home' />
      </form>
    </div>
  )
}
