import { useParams } from 'react-router'
import './movie.css'
import { Formulario } from '../../components/form'
import { Modal } from '../../components/modal/modal'
import { useEffect, useState, FontAwesomeIcon } from 'react'
import { client } from '../../service/client'
import { Rating } from 'react-simple-star-rating'

export const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    client.get(`/movie/${id}`).then(res => {
      setMovie(res.data.movie)
    })
      .catch(error => {
        console.log(error)
        setMovie()
      })
  })

  const handleStar = async (value) => {
    const movieTemp = { ...movie, note: value }
    setMovie(movieTemp)
    await client.put('/movie/$(movie.id)', movieTemp)
      .catch(error => {
        console.log(error)
        setMovie([])
      })
  }

  return (
    <div className='pageMovie'>
      <FontAwesomeIcon icon="Edit">
        <Modal
          label="Edit movie"
          title="Editing">
          <Formulario>
          </Formulario>
        </Modal>
      </FontAwesomeIcon>
      <h1 className='moviePage'>Movie</h1>
      <h3 className='h3Movie'>You choose the movie: {id}</h3>
      <Rating onClick={handleStar} ratingValue={movie.note} />
    </div>
  )
}
