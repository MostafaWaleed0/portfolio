import { InputType } from '../types'

export default function Input({
  type,
  id,
  error = false,
  errorMessage = '',
  variablePropName = `aria-describedby`,
  variablePropValue = `${id}_error`,
  ...props
}: InputType) {
  const variableAttribute = { [variablePropName]: variablePropValue }
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        {...props}
        type={type}
        name={id}
        id={id}
        autoComplete="off"
        spellCheck="false"
        aria-required="true"
        {...(error ? variableAttribute : '')}
      />
      {error && <p id={`${id}_error`}>*{errorMessage}</p>}
    </>
  )
}
