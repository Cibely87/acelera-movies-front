import './home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from '../../service/client'

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
        <h1>Hello, user! Welcome!</h1>
      </div>
      <ul>
        {itens.map(item => (
          <li key={item.id}>
            <img src={item.image} />
            <h2>{item.title}</h2>
            <Link to={`/movie/${item.id}`}>
            </Link>
          </li>
        )
        )}
      </ul>
    </>
  )
}
