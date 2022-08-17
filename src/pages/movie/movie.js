import { useParams } from 'react-router'
import { Formulario } from '../../components/form'
import { Modal } from '../../components/modal/modal'

export const Movie = () => {
  const { id } = useParams()

  return (
    <>
      <fontAwesomeIcon icon="Edit">
        <Modal
          label="Edit movie"
          title="edit">
          <Formulario>
          </Formulario>
        </Modal>
      </fontAwesomeIcon>
      <h1>Página Movie</h1>
      <h3>Você esta no filme com título: {id}</h3>
    </>
  )
}
