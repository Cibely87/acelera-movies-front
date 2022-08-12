import './modal.css'

export const Modal = () => {
  return (
    <div className="modal-container">
      <button>Create movie</button>

      <div className='modal-background'>
        <div className="modal">
          <header>
            <h3>Title</h3>
            <button className='closer'>X</button>
          </header>
          <p>Itens da modal</p>
        </div>
      </div>

    </div>
  )
}
