import { useParams } from 'react-router'

export const Movie = () => {
  const { id } = useParams()

  return (
    <>
      <h1>Página Movie</h1>
      <h3>Você esta no filme com título: {id}</h3>
    </>
  )
}
