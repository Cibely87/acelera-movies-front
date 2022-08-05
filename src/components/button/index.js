import './button.css'

export const Button = ({ onClick, type, text, classname }) => {
  return (
    <button onClick={onClick} className={classname} type={type}>{text}</button>
  )
}
