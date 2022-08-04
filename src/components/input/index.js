
export const Input = ({ label, type, placeholder = '', onChange, name }) => {
  return (
    <label>
      <span>{label}</span>
      <input name={name} type={type} placeholder={placeholder} onChange={onChange}></input>
    </label>
  )
}
