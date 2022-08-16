import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { Modal } from './components/modal/modal'
import { Formulario } from './components/form'

/* const Formulario = () => {
  return (
    <form>
      <input type="text" placeholder="novo filme" />
      <input type="password" placeholder="resume" />
      <button>salvar</button>
    </form>
  )
} */

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Modal
      label="New Movie"
      title="Add Movie">
      <Formulario />
    </Modal>
    <Modal
      label="Edit movie"
      title="edit">
      <Formulario>
      </Formulario>
    </Modal>
  </React.StrictMode>,
  document.getElementById('root')
)
