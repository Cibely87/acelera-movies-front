import { Input } from '../../components/input'
import { Button } from '../../components/button'
import './user.css'

export const User = () => {
  const userEmail = (email) => console.log(email)

  return (
    <div className='container'>
      <form>
        <Input label="Login" type="email" placeholder='Digite seu login' />
        <Input label="Password" type="text" placeholder='Digite sua senha' />
        <a href="#">Esqueceu sua senha</a>
        <Button onClick={userEmail} type='button' text='Entrar' />
      </form>
    </div>
  )
}
