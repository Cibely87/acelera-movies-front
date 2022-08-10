import './home.css'
import { Link } from 'react-router-dom'

const Lista = () => {
  const itens = [
    { id: 1, nome: 'Matilda' },
    { id: 2, nome: 'Querida, encolhi as crianças' },
    { id: 3, nome: 'Caça Fantasmas' },
    { id: 4, nome: 'Edward mãos de tesoura' }
  ]

  return (
    <ul>
      {itens.map(item => (
        <li key={item.id}>
          <Link to={`/movie/${item.id}`}>{item.nome}</Link>
        </li>
      )
      )}
    </ul>
  )
}

export const Home = () => {
  return (
    <div className='homePage'>
      <h2>Hello, user! Welcome!</h2>
      <Lista />
    </div>
  )
}
