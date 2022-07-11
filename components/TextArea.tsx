import { FC, InputHTMLAttributes } from 'react'

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  id: string
  label: string
  type?: string
  error?: boolean
  errorMessage?: string
}

const TextArea: FC<TextAreaProps> = (
  { id, label, error = false, errorMessage = '', ...props },
  { variablePropName = `aria-describedby`, variablePropValue = `${id}_error` },
) => {
  const variableAttribute = { [variablePropName]: variablePropValue }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        {...props}
        name={id}
        id={id}
        rows={10}
        spellCheck="false"
        autoComplete="off"
        {...(error ? variableAttribute : '')}
      ></textarea>
      {error && <p id={`${id}_helper`}>*{errorMessage}</p>}
    </>
  )
}

export default TextArea
