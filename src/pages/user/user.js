import { Input } from '../../components/input'
import { Button } from '../../components/button'

export const User = () => {
  const handlerClick = () => {
    alert('Salvo')
  }

  return (
    <>
      <Input label="Login" type="text" placeholder='Escreva seu nome' />
      <Input label="Password" type="text" placeholder='Digite sua senha' />
      <Button onClick={handlerClick} type='button'>Entrar</Button>
    </>
  )
}
