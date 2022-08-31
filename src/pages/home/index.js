import './home.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { client } from '../../service/client'
import { Formulario } from '../../components/form'
import { Modal } from '../../components/modal/modal'
import { Movie } from '../movie/movie'
import { Rating } from 'react-simple-star-rating'

export const Home = () => {
  const [itens, setItems] = useState([])

  useEffect(() => {
    client.get('/movie')
      .then(response => {
        setItems(response.data)
        console.log(response.data)
      })
  }, [])

  const handleStar = (value) => {
    setItems({ ...Movie, note: value })
  }

  return (
    <>
      <div className='homePage'>
        <h1 className='titleHome'>Hello! Welcome, choose a movie!</h1>
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
              <Rating readonly={true} onChange={handleStar} ratingValue={Movie.note} />
            </li>
          )
          )}
        </ul>
      </div>
    </>
  )
}
