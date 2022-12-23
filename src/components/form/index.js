import { Input } from '../input'
import './form.css'
import { useEffect, useState } from 'react'
import { client } from '../../service/client'

export const Formulario = ({ id }) => {
  const [formMovie, setFormMovie] = useState({
    title: '',
    gender: '',
    classification: '',
    subtitle: '',
    image: '',
    releaseDate: '',
    director: '',
    writer: '',
    studio: '',
    actors: '',
    resume: '',
    awards: '',
    note: 0
  })

  useEffect(() => {
    if (id) {
      client.get(`/movie/${id}`).then(response => {
        setFormMovie(response.data.movie)
        console.log(response.data)
      }).catch(error => {
        setFormMovie()
        console.log(error)
      })
    }
  })
  console.log(formMovie)

  const handleClick = () => {
    alert('Você clicou')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormMovie({
      ...formMovie, [name]: value
    })
  }

  return (
    <div className='formModal'>
      <form>
        <div className='titleClass'>
          <Input onChange={handleChange} name="title" type="text" placeholder="title" label="Title movie" />
          <Input onChange={handleChange} name="subtitle" type="text" placeholder="subtitle" label="Subtitle" />
        </div>
        <textarea rows="10" cols="58" type="text" placeholder="resume" label="Resume" />
        <div className='titleClass'>
          <Input onChange={handleChange} name="mm/dd/yyyy" type="text" placeholder="mm/dd/yyyy" label="Realese Date" />
          <Input onChange={handleChange} name="image" type="text" placeholder="image" label="Image" />
        </div>
        <div className='titleClass'>
          <Input onChange={handleChange} name="director" type="text" placeholder="director" label="Director" />
          <Input onChange={handleChange} name="writer" type="text" placeholder="writer" label="Writer" />
        </div>
        <div className='titleClass'>
          <Input onChange={handleChange} name="classification" type="text" placeholder="classification" label="Classification" />
          <Input onChange={handleChange} name="studio" type="text" placeholder="studio" label="Studio" />
        </div>
        <div className='titleClass'>
          <Input onChange={handleChange} name="note" type="number" placeholder="note" label="Star" />
          <Input onChange={handleChange} name="actor" type="text" placeholder="actor" label="Actor" />
        </div>
        <div className='titleClass'>
          <Input onChange={handleChange} name="awards" type="text" placeholder="awards" label="Awards" />
          <Input onChange={handleChange} name="gender" type="text" placeholder="gender" label="Gender" />
        </div>
        <button onClick={handleClick} className='buttonCreate'>Save Movie</button>
      </form>
    </div >
  )
}
