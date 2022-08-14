import './modal.css'
import { useState } from 'react'

export const Modal = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <>
      <button onClick={handleClick}>Create movie</button>

      {toggle && (
        <div className="modal-container">
          <div className="modal">
            <header>
              <h3>Title</h3>
              <button onClick={handleClick} className='closer'>X</button>
            </header>
            {children}
          </div>
        </div>
      )}

    </>
  )
}
