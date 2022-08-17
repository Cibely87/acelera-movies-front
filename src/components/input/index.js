import './input.css'

export const Input = ({ label, type, placeholder = '', onChange, name }) => {
  return (
    <div className='inputHome'>
      <label>{label}</label>
      <input name={name} type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}
