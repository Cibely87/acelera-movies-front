import { useParams } from 'react-router'

export const Movie = () => {
  const { id } = useParams()

  return (
    <>
      <h1>Página Movie</h1>
      <p>Você esta no filme com título: {id}</p>
    </>
  )
}
