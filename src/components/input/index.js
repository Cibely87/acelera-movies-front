import './input.css'

export const Input = ({ label, type, placeholder = '', onChange, name }) => {
  return (
    <>
      <label>{label}</label>
      <input name={name} type={type} placeholder={placeholder} onChange={onChange}></input>
    </>
  )
}
