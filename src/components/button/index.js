
export const Button = ({ onClick, text, classe, type, disabled = false }) => {
  return (
    <button className={classe} onClick={onClick} disabled={disabled} text={text} type={type} />
  )
}
