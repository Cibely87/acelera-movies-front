import { useParams } from 'react-router'
import './movie.css'
import { Formulario } from '../../components/form'
import { Modal } from '../../components/modal/modal'

export const Movie = () => {
  const { id } = useParams()

  return (
    <>
      <fontAwesomeIcon icon="Edit">
        <Modal
          label="Edit movie"
          title="Editing">
          <Formulario>
          </Formulario>
        </Modal>
      </fontAwesomeIcon>
      <h1 className='moviePage'>Movie</h1>
      <h3 className='h3Movie'>You are in the movie with title: {id}</h3>
    </>
  )
}
