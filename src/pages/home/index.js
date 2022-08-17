import './home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import { Formulario } from '../../components/form'
import { Modal } from '../../components/modal/modal'

export const Home = () => {
  const [itens, setItems] = useState([])

  useEffect(() => {
    client.get('/movie')
      .then(response => {
        setItems(response.data)
        console.log(response.data)
      })
  }, [])

  return (
    <>
      <div className='homePage'>
        <h1>Hello! Welcome, choose a movie!</h1>
      </div>
      <aside>
        <Modal
          label="New Movie"
          title="A new movie">
          <Formulario />
        </Modal>
      </aside>
      <ul>
        {itens.map(item => (
          <li key={item.id}>
            <Link to={`/movie/${item.id}`}>
              <h2>{item.title}</h2>
              <img src={item.image} />
            </Link>
          </li>
        )
        )}
      </ul>
    </>
  )
}
