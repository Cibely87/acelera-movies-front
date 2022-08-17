import './modal.css'
import { useState } from 'react'

export const Modal = ({ children, label, title }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <>
      <button onClick={handleClick}>{label}</button>

      {toggle && (
        <div className="modal">
          <header>
            <h3>{title}</h3>
            <button onClick={handleClick} className='closer'>X</button>
          </header>
          {children}
        </div>
      )}

    </>
  )
}
