import { Input } from '../../components/input'
import { Button } from '../../components/button'

export const User = () => {
  const userEmail = (email) => console.log(email)

  return (
    <>
      <form>
        <Input label="Login" type="email" placeholder='Digite seu login' /> <br />
        <Input label="Password" type="text" placeholder='Digite sua senha' />  <br />
        <a href="#">Esqueceu sua senha</a> <br />
        <Button onClick={userEmail} type='button'>Entrar</Button> <br />
      </form>
    </>
  )
}
