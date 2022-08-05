import { Input } from '../../components/input'
import { Button } from '../../components/button'

export const User = () => {
  const handlerClick = () => {
    alert('Salvo')
  }

  return (
    <>
      <form>
        <Input label="Login" type="text" placeholder='Escreva seu nome' /> <br />
        <Input label="Password" type="text" placeholder='Digite sua senha' />  <br />
        <a href="#">Esqueceu sua senha</a> <br />
        <Button onClick={handlerClick} type='button'>Entrar</Button> <br />
      </form>
    </>
  )
}
