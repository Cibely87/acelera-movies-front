import { Input } from '../input'
import './form.css'

export const Formulario = () => {
  return (
    <div className='formModal'>
      <form>
        <div className='titleClass'>
          <Input type="text" placeholder="title" label="Title movie" />
          <Input type="text" placeholder="subtitle" label="Subtitle" />
        </div>
        <textarea rows="10" cols="62" type="text" placeholder="resume" label="Resume" />
        <div className='titleClass'>
          <Input type="text" placeholder="mm/dd/yyyy" label="Realese Date" />
          <Input type="text" placeholder="image" label="Image" />
        </div>
        <div className='titleClass'>
          <Input type="text" placeholder="director" label="Director" />
          <Input type="text" placeholder="writer" label="Writer" />
        </div>
        <div className='titleClass'>
          <Input type="text" placeholder="classification" label="Classification" />
          <Input type="text" placeholder="studio" label="Studio" />
        </div>
        <div className='titleClass'>
          <Input type="number" placeholder="note" label="Star" />
          <Input type="text" placeholder="actor" label="Actor" />
        </div>
        <div className='titleClass'>
          <Input type="text" placeholder="awards" label="Awards" />
          <Input type="text" placeholder="gender" label="Gender" />
        </div>
        <button>Create Movie</button>
      </form>
    </div >
  )
}
