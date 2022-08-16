import { Input } from '../input'

export const Formulario = () => {
  return (
    <form>
      <Input type="text" placeholder="title" label="Title movie" />
      <Input type="text" placeholder="subtitle" label="Subtitle" />
      <Input type="text" placeholder="resume" label="Resume" />
      <Input type="text" placeholder="date" label="Realese Date" />
      <Input type="text" placeholder="image" label="Image" />
      <Input type="text" placeholder="director" label="Director" />
      <Input type="text" placeholder="writer" label="Writer" />
      <Input type="text" placeholder="classification" label="Classification" />
      <Input type="text" placeholder="studio" label="Studio" />
      <Input type="text" placeholder="star" label="Star" />
      <button>Create Movie</button>
    </form>
  )
}
