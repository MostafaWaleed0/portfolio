import { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  id: string
  error?: boolean
  errorMessage?: string
  variablePropName?: any
  variablePropValue?: any
}

const Input: FC<InputProps> = (
  { type, id, error = false, errorMessage = '', ...props },
  { variablePropName = `aria-describedby`, variablePropValue = `${id}_error` },
) => {
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

export default Input
